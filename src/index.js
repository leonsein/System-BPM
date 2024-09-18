import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Route y Routes
import App from './App';
import LoginPage from './components/LoginPage'; // Asegúrate de importar LoginPage
import './index.css'; // Asegúrate de importar tus estilos

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />       {/* Ruta para la página principal */}
      <Route path="/login" element={<LoginPage />} /> {/* Ruta para la página de login */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
