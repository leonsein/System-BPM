import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from './mci-technology.png';

function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isWorkSpaceVisible, setIsWorkSpaceVisible] = useState(false);
    const [folders, setFolders] = useState([]);
    const [newFolderName, setNewFolderName] = useState('');
    const [editFolderIndex, setEditFolderIndex] = useState(-1);
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedFolders = JSON.parse(localStorage.getItem('folders'));
        if (storedFolders) {
            setFolders(storedFolders);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('folders', JSON.stringify(folders));
    }, [folders]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleLogout = () => {
        navigate('/');
    };

    const handleAreasClick = () => {
        setIsWorkSpaceVisible(true);
    };

    const handleFolderAction = (e) => {
        e.preventDefault();

        if (newFolderName.trim()) {
            if (isEditing) {
                const updatedFolders = folders.map((folder, index) =>
                    index === editFolderIndex ? newFolderName : folder
                );
                setFolders(updatedFolders);
                setIsEditing(false);
            } else {
                setFolders([...folders, newFolderName]);
            }
            setNewFolderName(''); // Reiniciar el campo de nombre
            setEditFolderIndex(-1); // Reiniciar el índice de edición
        } else {
            alert('Por favor, introduce un nombre para la carpeta.');
        }
    };

    const handleDeleteFolder = (index) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar esta carpeta?")) {
            const updatedFolders = folders.filter((_, i) => i !== index);
            setFolders(updatedFolders);
        }
    };

    const handleEditFolder = (index) => {
        setNewFolderName(folders[index]);
        setEditFolderIndex(index);
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setNewFolderName('');
        setEditFolderIndex(-1);
        setIsEditing(false);
    };

    const filteredFolders = folders.filter(folder =>
        folder.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <li onClick={handleAreasClick}>
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

            {isWorkSpaceVisible && (
                <div className={`workspace ${isMenuOpen ? 'with-sidebar' : ''}`}>
                    <div className="workspace-header">
                        <h3>Procesos</h3>
                    </div>

                    <div className="workspace-content">
                        <div className="folder-section">
                            <i className="fas fa-folder"></i>
                            <div className="folder-options">
                                <input
                                    type="text"
                                    value={newFolderName}
                                    onChange={(e) => setNewFolderName(e.target.value)}
                                    placeholder="Nombre de la carpeta"
                                />
                                <button type="button" onClick={handleFolderAction}>
                                    {isEditing ? 'Actualizar' : 'Crear'}
                                </button>
                                {isEditing && <button onClick={handleCancelEdit}>Cancelar</button>}
                            </div>
                        </div>

                        <div className="search-section">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar carpeta..."
                            />
                        </div>

                        <hr className="separator" />

                        <div className="user-folders">
                            {filteredFolders.length > 0 ? (
                                filteredFolders.map((folder, index) => (
                                    <div key={index} className="folder-item">
                                        <i className="fas fa-folder"></i>
                                        <span>{folder}</span>
                                        <button onClick={() => handleEditFolder(index)}>Editar</button>
                                        <button onClick={() => handleDeleteFolder(index)}>Eliminar</button>
                                    </div>
                                ))
                            ) : (
                                <p>No hay carpetas creadas o no se encontraron coincidencias.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
