import React, { useEffect, useState } from 'react';
import './App.css'; 
import logo from './images/mci-technology.png'; // Ruta del logo

function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToLoginPage = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = '/login'; // Redirige a la página de login en la misma ventana
    }, 300); // Pequeña demora para permitir que el estado se actualice y el contenido se oculte
  };

  useEffect(() => {
    // Mostrar el overlay durante la carga
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    // Ocultar el overlay una vez que la carga esté completa
    const handleLoad = () => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 500); // Coincide con la duración de la transición de opacidad
    };

    window.addEventListener('load', handleLoad);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {/* Overlay que cubre la página durante la carga */}
      <div id="overlay"></div>
      <div className={`App ${isRedirecting ? 'redirecting' : ''}`}>
        {/* Video de fondo */}
        <div id="video-background">
          <video autoPlay loop muted>
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>

        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <div className="icon-container">
            <div className="login-icon" onClick={redirectToLoginPage}>
              <i className="fas fa-user-circle"></i> {/* Ícono de login */}
              <span className="login-text">Acceder</span> {/* Texto Acceder */}
            </div>
          </div>
        </header>

        <div className="content">
          <h1 className="letter">Bienvenido al Sistema BPM</h1>
          <h2 className="letter">MCI TECHNOLOGY</h2>
          <p className="letter">Inicia sesión para continuar</p>
          <div className="underline"></div>
        </div>
      </div>
    </>
  );
}

export default App;
