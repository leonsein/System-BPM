import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from './mci-technology.png'; // Asegúrate de tener el logo disponible.

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
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li>
            <i className="fas fa-building"></i> Áreas
          </li>
          <li>
            <i className="fas fa-inbox"></i> Bandeja de entrada
          </li>
          <li>
            <i className="fas fa-paper-plane"></i> Bandeja de salida
          </li>
          <li>
            <i className="fas fa-check-circle"></i> Finalizados
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
