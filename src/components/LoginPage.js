import React from 'react'; 
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import './LoginPage.css'; // Asegúrate de tener este archivo CSS

function LoginPage() {
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
          <form>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <div className="login-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recuérdame</span>
              </label>
              {/* Cambiado a Link para navegación interna */}
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit">Iniciar sesión</button>
            <div className="signup">
              <span>¿Aún no tienes una cuenta?</span>
              <Link to="/register">Regístrate</Link> {/* Actualizado para usar Link */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
