import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './HomePage.css'; // Importamos los estilos
import logo from './mci-technology.png'; // Asegúrate de que tienes tu logo en la carpeta src

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú lateral
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // Estado para el menú de usuario

  const navigate = useNavigate(); // Hook para redireccionar

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú lateral
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen); // Cambia el estado del menú de usuario
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    // Aquí podrías agregar lógica adicional de cierre de sesión si es necesario
    navigate('/'); // Redirige al usuario a la página de inicio "/"
  };

  return (
    <div className="App">
      {/* Header con logotipo, menú y icono de inicio de sesión */}
      <header className="App-header">
        <div className="menu-container">
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span> {/* Icono de tres líneas en el header */}
          </button>
          <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <ul className="menu-list">
              <li onClick={toggleMenu}>&#9776; {/* Icono de tres líneas para cerrar */}</li>
              <div className="process-title">Procesos</div>
              <li>
                <i className="fas fa-building"></i> {/* Icono de edificio para "Áreas" */}
                Áreas
              </li>
              <li>
                <i className="fas fa-inbox"></i> {/* Icono de bandeja de entrada */}
                Bandeja de entrada
              </li>
              <li>
                <i className="fas fa-paper-plane"></i> {/* Icono de bandeja de salida */}
                Bandeja de salida
              </li>
              <li>
                <i className="fas fa-check-circle"></i> {/* Icono de finalizados */}
                Finalizados
              </li>
            </ul>
          </div>
        </div>

        <img src={logo} alt="Logo MCI" className="logo" />

        {/* Icono de usuario para desplegar el menú */}
        <div className="login-icon" onClick={toggleUserMenu}>
          <i className="fas fa-user"></i>
        </div>

        {/* Menú desplegable de usuario */}
        <div className={`user-menu ${isUserMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={handleLogout}>Cerrar Sesión</li> {/* Cerrar sesión desde el menú del usuario */}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
