import React from 'react';
import './Card.css';
import imgCard  from '../assets/img/maceimg.png'

function Card() {
  return (
    <div class="card">
    <img src={imgCard} alt="Product Image" className="card-image"
              />
    <div class="card-content">
        <h2 class="card-title">Product Name</h2>
        <div class="card-tags">
            <span class="tag">1</span>
            <span class="tag">g2s</span>
            <span class="tag">Tag3</span>
            <span class="tag">g4</span>
            <span class="tag">Ta</span>
            <span class="tag">Tag6</span>
            <span class="tag">Tag6</span>
            <span class="tag">Tag6</span>
            <span class="tag">Tag6</span>
        </div>
        <p class="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
        </p>
        <div class="card-price">
            $99.99
        </div>
        <div class="card-buttons">
            <button class="card-button">Agregar al carrito</button>
            <button class="card-button">Ver producto</button>
        </div>
    </div>
  </div>
  );
}

export default Card;
