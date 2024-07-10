import React, { useState } from "react";
import "./Navbar.css";
import cartIcon from "../assets/img/cart.png";
import Cart from "./Cart";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

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
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/QuienesSomos">Quiénes somos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <a href="#!" onClick={handleCartClick}>
              <img
                src={cartIcon}
                alt="Carrito de compras"
                className="cart-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
      <Cart isOpen={isCartOpen} onClose={handleCartClick} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
