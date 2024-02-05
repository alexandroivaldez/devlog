import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddEntry from './AddEntry';
import LoginPage from './components/LoginPage';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEntry" element={<AddEntry />}  />
      <Route path="/login" element={<LoginPage />}  />
    </Routes>
    </>
  )
}

export default App