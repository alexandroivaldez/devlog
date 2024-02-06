import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddEntry from './AddEntry';
import LoginPage from './components/LoginPage';
import PrivateRoutes from './components/PrivateRoutes';
import { useState } from 'react';

function App() {

  let [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}  />
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />} >
        <Route path="/addEntry" element={<AddEntry />} />
      </Route>
    </Routes>
    </>
  )
}

export default App