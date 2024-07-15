import React from 'react';
import Navbar from '../src/component/Navbar';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import QuienesSomos from './component/QuienesSomos';
import Default from './component/Default';
import Card from './component/Card';
import ProductContainer from './component/ProductContainer';
import SliderComponent from './component/SliderComponent';
import ProductContainerSlider from './component/ProductContainerSlider';
import Inicio from './component/Inicio';
import Dashboard from './component/Dashboard/Dashboard';
import ProductList from './component/Dashboard/ProductList';
import DashboardProduct from './component/Dashboard/DashboardProduct';
import DashboardUsers from './component/Dashboard/Usuarios/DashboardUsers';



function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Navigate to="/Inicio" />} />
          <Route path='Inicio' element={<Inicio />} />
          <Route path='QuienesSomos' element={<QuienesSomos />} />
          <Route path='Card' element={<Card />} />
          <Route path='ProductContainer' element={<ProductContainer />} />
          <Route path='SliderComponent' element={<SliderComponent />} />
          <Route path='ProductContainerSlider ' element={<ProductContainerSlider />} />
          <Route path='ProductList' element={<ProductList />} />
          <Route path='*' element={<Default />} />
        </Route>

        <Route path='Dashboard' element={<Dashboard />}>
          <Route path='DashboardProduct' element={<DashboardProduct />} />
          <Route path='DashboardUsers' element={<DashboardUsers />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;