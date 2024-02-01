import { Icon } from '@iconify/react';
import './App.css'
import EntryContainer from './components/EntryContainer';
import { useState } from 'react';

function App() {

  const currentDate: Date = new Date(); // Current data and time
  let entries = 2;
  let title = "Some random title";
  let type = "Work";

  const [data, setData] = useState({
    title: title,
    type: type,
    date: currentDate
  });

  const [responseMessage, setResponseMessage] = useState('');

  const sendDataToLambda = () => {
    const url = 'https://1qcfnho0x7.execute-api.us-east-1.amazonaws.com/default/AddEntry';

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:5173',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((responseData) => {
        console.log(responseData)
        setResponseMessage(responseData);
      })
      .catch((error) => {
        setResponseMessage(error.message);
      });
  };

  return (
    <div className='bg-[#001E2B]'>
      <nav className='flex justify-between bg-[#001E2B]'>
        <div className='flex justify-between items-center gap-[5px] ml-[5px] mt-[5px]'>
          <Icon icon="mdi:github" width="20px" color="#6CF4B5" />
          <h1 className='text-[15px] text-[#008FE5]'><a href="https://github.com/alexandroivaldez/devlog" target='_blank'>alexandroivaldez / devlog</a></h1>
        </div>
      </nav>
      <button onClick={sendDataToLambda}>Send Data to Lambda</button>
      <p>{responseMessage}</p>
      <div className='w-screen h-screen bg-[#001E2B]'>
        <div className='flex flex-col w-[75%] ml-auto mr-auto mt-[50px] justify-center'>
          <div className='flex flex-col w-[220px]'>
            <h1 className='text-[50px] text-[#E5EAE8]'>Devlog</h1>
            <div className='flex justify-between'>
              <p className='text-[#B9C0BF]'>{currentDate.toDateString()}</p>
              <p className='text-[#B9C0BF]'>&#x2022;</p>
              <p className='text-[#B9C0BF]'>{entries} stories</p>
            </div>
            <div className='hidden border bored-red-700 w-[100%] flex flex-col gap-[5px] text-[#B9C0BF]'>
              <label>Title:</label>
              <input type="text" name="title"></input>
              <label>Type:</label>
              <input type="text"></input>
              <label>Entry</label>
              <input type="textarea"></input>
              <button>Submit</button>
            </div>
          </div>
          <EntryContainer />
        </div>
      </div>

    </div>
  )
}

export default App