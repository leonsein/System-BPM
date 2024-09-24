import React, { useState } from 'react'; // Importamos useState
import './HomePage.css'; // Importamos los estilos
import logo from './mci-technology.png'; // Asegúrate de que tienes tu logo en la carpeta src

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú al hacer clic
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
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Contacto</li>
              <li>Cerrar Sesión</li>
            </ul>
          </div>
        </div>

        <img src={logo} alt="Logo MCI" className="logo" />
        
        <div className="login-icon">
          <i className="fas fa-user"></i>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="content">
        <h1>Bienvenido al sistema BPM</h1>
        <h2>MCI Technology</h2>
        <hr className="underline" /> {/* Línea horizontal para el texto */}
        <p>Soluciones de ingeniería en automatización industrial</p>
      </main>
    </div>
  );
}

export default HomePage;
