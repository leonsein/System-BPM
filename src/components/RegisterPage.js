import React from 'react'; 
import './LoginPage.css'; // Reutilizamos los mismos estilos
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté importado

function RegisterPage() {
  return (
    <div className="login-page">
      {/* Fondo desenfocado */}
      <div className="background-blur"></div>

      {/* Contenido del formulario */}
      <div className="login-container">
        <div className="login-header">
          <h1>¡Regístrate!</h1>
        </div>
        <div className="login-body">
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Crear cuenta</button>
            <div className="signup">
              <span>¿Ya tienes una cuenta?</span>
              <Link to="/login">Inicia sesión</Link> {/* Enlace a la página de login */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
