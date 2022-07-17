import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <ItemListContainer saludo="Bienvenido" />    */}
        {/* <ItemCount stock={5} initial={1} /> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up'  element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
