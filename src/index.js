import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import LoginPage from './components/LoginPage'; 
import RegisterPage from './components/RegisterPage'; // Importar RegisterPage
import './index.css'; 
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import HomePage from './components/HomePage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Página principal */}
      <Route path="/login" element={<LoginPage />} /> {/* Página de login */}
      <Route path="/register" element={<RegisterPage />} /> {/* Página de registro */}
      <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Página de registro */}
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/home" element={<HomePage />} /> {/* Página de login */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
