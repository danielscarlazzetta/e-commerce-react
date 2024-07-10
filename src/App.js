import React from 'react';
import Navbar from '../src/component/Navbar';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import QuienesSomos from './component/QuienesSomos';
import Default from './component/Default';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='QuienesSomos' element={<QuienesSomos />} />
          <Route path='*' element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;