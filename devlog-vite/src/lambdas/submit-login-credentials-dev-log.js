const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = "uri";

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);

  const db = await client.db("EntryLogs");

  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {

  /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
  context.callbackWaitsForEmptyEventLoop = false;

  // Get an instance of our database
  const db = await connectToDatabase();

  // Make a MongoDB MQL Query to go into the movies collection and return the first 5 documents.
  const mongoResponse = await db.collection("users").find({}).toArray();
  
  const responseTest = JSON.stringify(mongoResponse);
  
  // Parse the JSON string into an array of objects
  const movies2 = JSON.parse(responseTest);
  
  console.log(movies2);

  // Access the "username" property and store it in a variable
  const username = movies2[0].username;
  const password = movies2[0].password;
  
  let response;
  
  if (event.username === username && event.password === password){
    response = {
    statusCode: 200,
    message: 'password matched!',
    body: JSON.stringify(mongoResponse) 
    }
  } else {
    response = {
    statusCode: 123,
    body: JSON.stringify(mongoResponse)
    }
  }

  return response;
};