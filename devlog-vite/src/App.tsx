import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddEntry from './AddEntry';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEntry" element={<AddEntry />}  />
    </Routes>
    </>
  )
}

export default App