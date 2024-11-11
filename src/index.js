import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import LoginPage from './components/Login/LoginPage'; 
import RegisterPage from './components/Register/RegisterPage'; 
import './index.css'; 
import ForgotPasswordPage from './components/ForgotPassword/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPassword/ResetPasswordPage';
import HomePage from './components/Home/HomePage';
import Areas from './components/FileManager/Areas';

const rootElement = document.getElementById('root'); // Obtén el elemento root
const root = createRoot(rootElement); // Crea el root

// Renderiza la aplicación usando root.render
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Página principal */}
      <Route path="/login" element={<LoginPage />} /> {/* Página de login */}
      <Route path="/register" element={<RegisterPage />} /> {/* Página de registro */}
      <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Página de olvido de contraseña */}
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/home" element={<HomePage />} /> {/* Página de inicio */}
      <Route path="/areas" element={<Areas />} /> {/* Nueva ruta */}
    </Routes>
  </Router>
);
