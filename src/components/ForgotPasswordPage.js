import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import './LoginPage.css'; // Reutilizamos los mismos estilos

function ForgotPasswordPage() {
  const [showDialog, setShowDialog] = useState(false); // Estado para controlar el diálogo

  // Maneja el envío del formulario
  const handleSendEmail = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Lógica para manejar el envío del correo de recuperación
    // (Esto debería ser reemplazado con lógica real)

    // Muestra el cuadro de diálogo
    setShowDialog(true);
  };

  return (
    <div className="login-page">
      {/* Fondo desenfocado */}
      <div className="background-blur"></div>

      {/* Contenedor principal de recuperación de contraseña */}
      <div className="forgot-password-container">
        {/* Encabezado */}
        <div className="forgot-password-header">
          <h1>Recuperar Cuenta</h1>
        </div>
        {/* Cuerpo del formulario */}
        <div className="forgot-password-body">
          <p className="instruction-text">Introduce tu correo electrónico para recuperar tu cuenta.</p>
          <form onSubmit={handleSendEmail}>
            <input type="email" placeholder="Correo electrónico" required />
            <button type="submit">Enviar</button>
          </form>
          {showDialog && (
            <div className="dialog">
              <p>Hemos enviado un link a tu correo electrónico para restablecer tu contraseña.</p>
              <button onClick={() => setShowDialog(false)}>Cerrar</button>
            </div>
          )}
          <div className="forgot-password-footer">
            <Link to="/login">Volver al inicio de sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
