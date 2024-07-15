import React, { useState } from 'react';
import './Dashboard.css';
import ProductList from './ProductList';
import initialProducts from './initialProducts'; // Importa los productos ficticios

const DashboardProduct = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleUpdate = (id) => {
    console.log(`Actualizar producto con ID: ${id}`);
    // Lógica para actualizar el producto
  };

  const handleDelete = (id) => {
    console.log(`Eliminar producto con ID: ${id}`);
    // Lógica para eliminar el producto
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddDiscount = (id, discount) => {
    console.log(`Agregar descuento al producto con ID: ${id}, Descuento: ${discount}`);
    // Lógica para agregar descuento
    setProducts(products.map(product => 
      product.id === id ? { ...product, discount } : product
    ));
  };

  return (
     <>
       <main className="main-content">
        <h1>Dashboard a</h1>
        <ProductList
        products={products}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onAddDiscount={handleAddDiscount}
        />
        </main>

        </>
  );
};

export default DashboardProduct;
