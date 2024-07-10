import React from 'react';
import Navbar from '../src/component/Navbar';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Defaul from './pages/Default';
import QuienesSomos from './component/QuienesSomos';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='About' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='QuienesSomos' element={<QuienesSomos />} />
          <Route path='*' element={<Defaul />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


/*
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='About' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='../../QuienesSomos' element={<QuienesSomos />} />
          <Route path='*' element={<Defaul />} />
        </Route>
      </Routes>
    </div>
  );
}
    */