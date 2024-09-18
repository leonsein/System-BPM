import React from 'react'; 
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './LoginPage.css'; // Reutilizamos los mismos estilos
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté importado

function RegisterPage() {
  const navigate = useNavigate(); // Crea una instancia de useNavigate

  // Maneja el envío del formulario
  const handleRegister = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Aquí podrías agregar lógica para manejar el registro del usuario

    // Redirige al usuario a la página de login
    navigate('/login');
  };

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
          <form onSubmit={handleRegister}> {/* Usa el manejador en el formulario */}
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
