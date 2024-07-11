import React from 'react';
import './ProductContainerSlider.css';
import Card from './Card'; // Asegúrate de importar correctamente el componente Card

const ProductContainerSlider = () => {
  return (
    <div className="product-container-slider">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProductContainerSlider;
