import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ products, onUpdate, onDelete, onAddDiscount }) => {
  const [discount, setDiscount] = useState({});

  const handleDiscountChange = (id, value) => {
    setDiscount({ ...discount, [id]: value });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description.slice(0, 10)}</p>
          <p>Tags: {product.tags.join(', ')}</p>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <div className="product-images">
            {product.images.slice(0, 10).map((image, index) => (
              <img key={index} src={image} alt={`Producto ${product.id} - Imagen ${index + 1}`} />
            ))}
          </div>
          <input
            type="number"
            placeholder="Descuento"
            value={discount[product.id] || ''}
            onChange={(e) => handleDiscountChange(product.id, e.target.value)}
          />
          <button onClick={() => onAddDiscount(product.id, discount[product.id] || 0)}>Agregar Descuento</button>
          <button onClick={() => onUpdate(product.id)}>Actualizar</button>
          <button onClick={() => onDelete(product.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
