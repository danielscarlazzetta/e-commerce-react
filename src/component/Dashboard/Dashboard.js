import React from "react";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li>
            <Link to="/Dashboard/DashboardProduct">
              <i className="icon">🛒</i>
              <span className="text">Productos</span>
            </Link>
          </li>
          <li>
            <Link to="/Dashboard/DashboardUsers">
              <i className="icon">👥</i>
              <span className="text">Usuarios</span>
            </Link>
          </li>
          <li>
            <a href="#ventas">
              <i className="icon">💰</i>
              <span className="text">Ventas</span>
            </a>
          </li>
          <li>
            <Link to="/Inicio">
              <i className="icon">💰</i>
              <span className="text">Salir</span>
            </Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </div>
  );
};

export default Dashboard;
