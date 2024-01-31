import { Icon } from '@iconify/react';
import './App.css'
import EntryContainer from './components/EntryContainer';

function App() {

  const currentDate: Date = new Date(); // Current data and time
  let entries = 2; // Temporary data

  return (
    <>
      <nav className='flex justify-between'>
        <div className='flex justify-between items-center gap-[5px] ml-[5px] mt-[5px]'>
          <Icon icon="mdi:github" width="20px" />
          <h1 className='text-[15px]'>alexandroivaldez</h1>
        </div>
      </nav>
      <div className='w-screen h-screen'>
        <div className='flex flex-col w-[75%] ml-auto mr-auto mt-[50px] justify-center'>
          <div className='flex flex-col w-[220px]'>
            <h1 className='text-[50px]'>Devlog</h1>
            <div className='flex justify-between text-[#b09746]'>
              <p>{currentDate.toDateString()}</p>
              <p>&#x2022;</p>
              <p>{entries} stories</p>
            </div>
          </div>
          <EntryContainer />
        </div>
      </div>

    </>
  )
}

export default App