import React, { useState } from "react";
import "./Navbar.css";
import cartIcon from "../assets/img/cart.png";
import Cart from "./Cart";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">E-commerce</a>
        </div>
        <div className="navbar-toggle" onClick={handleMobileMenuClick}>
          &#9776;
        </div>
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/Inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
          </li>
          <li>
            <Link to="/ProductContainer" onClick={() => setIsMobileMenuOpen(false)}>Productos</Link>
          </li>
          <li>
            <Link to="/QuienesSomos" onClick={() => setIsMobileMenuOpen(false)}>Quiénes somos</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
          </li>
          <li>
            <Link to="/Dashboard" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
          </li>
          <li>
            <a href="#!" onClick={handleCartClick}>
              {/* <img
                src={cartIcon}
                alt="Carrito de compras"
                className="cart-icon"
              /> */}
              <i className="icon">🛒</i>
            </a>
          </li>
        </ul>
      </nav>
      <Cart isOpen={isCartOpen} onClose={handleCartClick} />
      <Outlet />
    </>
  );
}

export default Navbar;
