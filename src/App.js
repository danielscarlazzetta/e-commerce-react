import React from 'react';
import Navbar from '../src/component/Navbar';
import Footer from '../src/component/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Bienvenido a Mi E-commerce</h1>
      </header>
      <Footer />
    </div>
  );
}

export default App;
