import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='flex justify-between border border-red-500'>
      <div className='flex'>
        <h1>alexandroivaldez</h1>
      </div>
      <h1>O</h1>
    </nav>
    <div className='flex border border-red-500'>
      <div className=''>
        <h1>Stories</h1>
        <div className='flex'>
          <p>21 March, 2023</p>
          <p>-</p>
          <p>2 stories</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col'>
      <h3>Ethics</h3>
      <h2>Unethical design of cookie windows</h2>
      <p>All of the sites we visit today use trackers called cookies. These cookies always track our internet footprint and collect data about us...</p>
      <div className='flex'>
          <p>21 March, 2023</p>
          <p>-</p>
          <p>2 stories</p>
        </div>
    </div>
    </>
  )
}

export default App
