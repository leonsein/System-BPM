import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../../images/mci-technology.png';
import IniciarProceso from '../Form&BPM/IniciarProceso';

function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [showBPM, setShowBPM] = useState(false);
    const navigate = useNavigate(); // Para la navegación

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(prev => !prev);
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleStartProcess = () => {
        setShowBPM(true);
    };

    // Función para navegar a "Areas"
    const handleGoToAreas = () => {
        navigate('/areas');  // Redirige a la página de Áreas
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
                    <li onClick={handleGoToAreas}>  {/* Evento onClick para redirigir */}
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

            <div className={`workspace ${isMenuOpen ? 'with-sidebar' : ''}`}>
                {showBPM && <IniciarProceso />}
            </div>
        </div>
    );
}

export default HomePage;
