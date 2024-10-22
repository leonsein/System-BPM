import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../images/mci-technology.png';
import IniciarProceso from './IniciarProceso';
import { FileManager } from '@cubone/react-file-manager'; 
import '@cubone/react-file-manager/dist/style.css'; 
import axios from 'axios'; 

function Areas() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [showBPM, setShowBPM] = useState(false);
    const [files, setFiles] = useState([
        { name: 'Documents', isDirectory: true, path: '/Documents', updatedAt: '2024-09-09T10:30:00Z' },
        { name: 'Pictures', isDirectory: true, path: '/Pictures', updatedAt: '2024-09-09T11:00:00Z' },
        { name: 'Pic.png', isDirectory: false, path: '/Pictures/Pic.png', updatedAt: '2024-09-08T16:45:00Z', size: 2048 },
    ]);
    const navigate = useNavigate(); 

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

    const handleRefresh = () => {
        // Reinicia la lista de archivos al estado inicial
        setFiles([
            { name: 'Documents', isDirectory: true, path: '/Documents', updatedAt: '2024-09-09T10:30:00Z' },
            { name: 'Pictures', isDirectory: true, path: '/Pictures', updatedAt: '2024-09-09T11:00:00Z' },
            { name: 'Pic.png', isDirectory: false, path: '/Pictures/Pic.png', updatedAt: '2024-09-08T16:45:00Z', size: 2048 },
        ]);
    };

    const handleCreateFolder = (name, parentFolder) => {
        let newFolder;
        if (!parentFolder) {
            newFolder = { name, isDirectory: true, path: `/${name}`, updatedAt: new Date().toISOString() };
        } else {
            newFolder = { name, isDirectory: true, path: `${parentFolder.path}/${name}`, updatedAt: new Date().toISOString() };
        }

        setFiles(prevFiles => [...prevFiles, newFolder]);
    };

    const handleUpload = async (file, parentFolder) => {
        console.log('Uploading file:', file);
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('/api/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const newFile = {
                name: file.name,
                isDirectory: false,
                path: `${parentFolder ? parentFolder.path : ''}/${file.name}`,
                updatedAt: new Date().toISOString(),
                size: file.size,
            };

            setFiles(prevFiles => [...prevFiles, newFile]);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
            alert('Error al subir el archivo');
        }
    };

    const handleDelete = (filesToDelete) => {
        setFiles(prevFiles => 
            prevFiles.filter(file => !filesToDelete.some(f => f.path === file.path))
        );
    };

    const handleRename = (file, newName) => {
        setFiles(prevFiles => 
            prevFiles.map(f => 
                f.path === file.path ? { ...f, name: newName, path: `${f.path.split('/').slice(0, -1).join('/')}/${newName}` } : f
            )
        );
    };

    const handleFileOpen = (file) => {
        if (file.isDirectory) {
            console.log(`Opened folder: ${file.name}`);
        } else {
            console.log(`Opened file: ${file.name}`);
        }
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
                    <li onClick={() => navigate('/areas')}>
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
                <div className="file-manager">
                    <h2>Administrador de Archivos</h2>
                    <FileManager
                        files={files}
                        onCreateFolder={handleCreateFolder}
                        onDelete={handleDelete}
                        onRename={handleRename}
                        onFileOpen={handleFileOpen}
                        onUpload={handleUpload}
                        onRefresh={handleRefresh}  // Añadido para manejar el refresco
                    />
                </div>
            </div>
        </div>
    );
}

export default Areas;
