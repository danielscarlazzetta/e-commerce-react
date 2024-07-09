import React, { useState } from 'react';
import './Navbar.css';
import cartIcon from '../assets/img/cart.png';
import Cart from './Cart';

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">E-commerce</a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="#quienes-somos">Quiénes somos</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li>
            <a href="#!" onClick={handleCartClick}>
              <img src={cartIcon} alt="Carrito de compras" className="cart-icon" />
            </a>
          </li>
        </ul>
      </nav>
      <Cart isOpen={isCartOpen} onClose={handleCartClick} />
    </>
  );
}

export default Navbar;
