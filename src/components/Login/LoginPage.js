import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import '../Login/LoginPage.css'; // Asegúrate de tener este archivo CSS

function LoginPage() {
  const [correo, setCorreo] = useState(''); // Estado para el correo
  const [contraseña, setContraseña] = useState(''); // Estado para la contraseña
  const navigate = useNavigate(); // Hook para redireccionar

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }), // Enviamos las credenciales
      });

      if (response.ok) {
        navigate('/home'); // Redirige a la página de Home
      } else {
        alert('Credenciales incorrectas. Intenta de nuevo.'); // Mensaje de error
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="background-blur"></div>
      <div className="login-container">
        <div className="login-header">
          <h1>¡Bienvenido!</h1>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={correo} 
              onChange={(e) => setCorreo(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={contraseña} 
              onChange={(e) => setContraseña(e.target.value)} 
              required 
            />
            <div className="login-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recuérdame</span>
              </label>
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit">Iniciar sesión</button>
            <div className="signup">
              <span>¿Aún no tienes una cuenta?</span>
              <Link to="/register">Regístrate</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
