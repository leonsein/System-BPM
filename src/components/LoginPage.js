import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './LoginPage.css'; // Asegúrate de tener este archivo CSS

function LoginPage() {
  const navigate = useNavigate(); // Hook para redireccionar

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Aquí podrías agregar validaciones o autenticación
    // Redirigir a la página de inicio
    navigate('/home'); // Redirige a la página de Home
  };

  return (
    <div className="login-page">
      {/* Fondo desenfocado */}
      <div className="background-blur"></div>

      {/* Contenido del formulario */}
      <div className="login-container">
        <div className="login-header">
          <h1>¡Bienvenido!</h1>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit}> {/* Maneja el evento submit */}
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <div className="login-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recuérdame</span>
              </label>
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit">Iniciar sesión</button> {/* Botón de submit */}
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
