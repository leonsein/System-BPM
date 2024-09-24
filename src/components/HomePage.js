import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from './mci-technology.png';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="homepage">
      {/* Barra superior */}
      <div className="topbar">
        <div className="topbar-left">
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
          </button>
        </div>

        <div className="topbar-center">
          <img src={logo} alt="Logo MCI" className="logo" />
        </div>

        <div className="topbar-right">
          <div className="login-icon" onClick={toggleUserMenu}>
            <i className="fas fa-user-circle"></i>
          </div>

          {/* Menú desplegable del usuario */}
          {isUserMenuOpen && (
            <div className="user-menu">
              <ul>
                <li onClick={handleLogout}>Cerrar Sesión</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Menú lateral (sidebar) */}
      <div className={`sidebar ${isMenuOpen ? 'open' : 'collapsed'}`}>
        <ul className="menu-list">
          {/* Encabezado del menú lateral */}
{isMenuOpen && (
  <div className="sidebar-header">
    <h2 className="process-title">Procesos</h2>
  </div>
)}

          <li>
            <i className="fas fa-building"></i> 
            <span className="menu-text">Áreas</span>
          </li>
          <li>
            <i className="fas fa-inbox"></i> 
            <span className="menu-text">Bandeja de entrada</span>
          </li>
          <li>
            <i className="fas fa-paper-plane"></i> 
            <span className="menu-text">Bandeja de salida</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i> 
            <span className="menu-text">Finalizados</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
