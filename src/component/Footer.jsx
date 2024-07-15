import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>Somos una tienda dedicada a ofrecer los mejores productos para ti.</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@mi-ecommerce.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <p>
            <a href="https://facebook.com">Facebook</a> | 
            <a href="https://twitter.com">Twitter</a> | 
            <a href="https://instagram.com">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mi E-commerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
