import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from './mci-technology.png';
import IniciarProceso from './IniciarProceso'; // Importamos el nuevo componente

function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [showBPM, setShowBPM] = useState(false); // Estado para controlar la visibilidad del sistema BPM
    const navigate = useNavigate();

    // Función para abrir/cerrar menú
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // Función para abrir/cerrar menú de usuario
    const toggleUserMenu = () => {
        setIsUserMenuOpen(prev => !prev);
    };

    // Función para cerrar sesión
    const handleLogout = () => {
        navigate('/');
    };

    // Función para mostrar el sistema BPM al hacer clic en el botón
    const handleStartProcess = () => {
        setShowBPM(true); // Muestra el componente BPM
    };

    return (
        <div className="homepage">
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

                    {isUserMenuOpen && (
                        <div className="user-menu">
                            <ul>
                                <li onClick={handleLogout}>Cerrar Sesión</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className={`sidebar ${isMenuOpen ? 'open' : 'collapsed'}`}>
                <ul className="menu-list">
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
                    {isMenuOpen && (
                        <div className="start-process-button-container">
                            <button className="start-process-button" onClick={handleStartProcess}>
                                Iniciar proceso
                            </button>
                        </div>
                    )}
                </ul>
            </div>

            {/* Mostrar el sistema BPM en el espacio de trabajo */}
            <div className={`workspace ${isMenuOpen ? 'with-sidebar' : ''}`}>
                {showBPM && <IniciarProceso />} {/* Aquí mostramos el componente BPM */}
            </div>
        </div>
    );
}

export default HomePage;
