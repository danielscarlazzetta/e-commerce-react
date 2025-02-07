import React from "react";
import "./Cart.css";
import Btn from "./Btn";

function Cart({ isOpen, onClose }) {
  return (
    <>
      <div className={`cart ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Carrito de Compras</h2>
        <ul>
          <li>Producto 1</li>
          <li>Producto 2</li>
          <li>Producto 3</li>
        </ul>
      <Btn text="Realizar compra"/>
      </div>
    </>
  );
}

export default Cart;
