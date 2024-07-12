import React from 'react';
import './Dashboard.css';
import DashboardProduct from './DashboardProduct';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li>
            <a href="#productos">
              <i className="icon">🛒</i>
              <span className="text">Productos</span>
            </a>
          </li>
          <li>
            <a href="#usuarios">
              <i className="icon">👥</i>
              <span className="text">Usuarios</span>
            </a>
          </li>
          <li>
            <a href="#ventas">
              <i className="icon">💰</i>
              <span className="text">Ventas</span>
            </a>
          </li>
        </ul>
      </aside>
      <DashboardProduct />

    </div>
  );
};

export default Dashboard;
