import { Icon } from '@iconify/react';
import './App.css'
import EntryContainer from './components/EntryContainer';
import React, { useEffect, useState } from 'react';
import BasicForm from './components/BasicForm';

function App() {

  const currentDate: Date = new Date(); // Current data and time
  let entries = 2;

  const [responseMessage, setResponseMessage] = useState();

  const [testData, setTestData] = useState([{ "_id": "65bd5d8db0405eaf75145407", "type": "aasdasda", "title": "asdasdadd", "content": "dsdsdsdsdsdsd", "date": "Fri Feb 02 2024 15:24:24 GMT-0600 (Central Standard Time)" }, { "_id": "65bd5d8db0405eaf75145407", "type": "aasdasda", "title": "asdasdadd", "content": "dsdsdsdsdsdsd", "date": "Fri Feb 02 2024 15:24:24 GMT-0600 (Central Standard Time)" }]);

  const getDataFromLambda = () => {
    const url = 'https://nmega69f5e.execute-api.us-east-1.amazonaws.com/dev';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .then((responseData) => {
        setResponseMessage(responseData.body);
      })
      .catch((error) => {
        setResponseMessage(error.message);
      });
  };

  // Call function on mount
  useEffect(() => {
    getDataFromLambda();
  }, []);

  return (
    <div className='bg-[#001E2B]'>
      <nav className='flex justify-between bg-[#001E2B]'>
        <div className='flex justify-between items-center gap-[5px] ml-[5px] mt-[5px]'>
          <Icon icon="mdi:github" width="20px" color="#6CF4B5" />
          <h1 className='text-[15px] text-[#008FE5]'><a href="https://github.com/alexandroivaldez/devlog" target='_blank'>alexandroivaldez / devlog</a></h1>
        </div>
      </nav>

      {/* <p className="text-white">{responseMessage}</p> */}
      <div className='w-[100%] h-[100%] bg-[#001E2B]'>
        <div className='flex flex-col w-[75%] ml-auto mr-auto mt-[50px] justify-center'>
          <div className='flex flex-col w-[220px]'>
            <h1 className='text-[50px] text-[#E5EAE8]'>Devlog</h1>
            <div className='flex justify-between'>
              <p className='text-[#B9C0BF]'>{currentDate.toDateString()}</p>
              <p className='text-[#B9C0BF]'>&#x2022;</p>
              <p className='text-[#B9C0BF]'>{entries} stories</p>
            </div>

          </div>
          <BasicForm />
          <EntryContainer data={responseMessage} />
        </div>
      </div>

    </div>
  )
}

export default App