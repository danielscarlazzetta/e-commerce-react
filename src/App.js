import React from 'react';
import Navbar from '../src/component/Navbar';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import QuienesSomos from './component/QuienesSomos';
import Default from './component/Default';
import Card from './component/Card';
import ProductContainer from './component/ProductContainer';
import SliderComponent from './component/SliderComponent';
import ProductContainerSlider from './component/ProductContainerSlider';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='QuienesSomos' element={<QuienesSomos />} />
          <Route path='Card' element={<Card />} />
          <Route path='ProductContainer' element={<ProductContainer />} />
          <Route path='SliderComponent' element={<SliderComponent />} />
          <Route path='ProductContainerSlider ' element={<ProductContainerSlider />} />
          <Route path='*' element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;