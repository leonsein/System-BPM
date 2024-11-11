import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importamos el hook para navegar
import '../Login/LoginPage.css'; // Reutilizamos los mismos estilos

function ForgotPasswordPage() {
  const [showDialog, setShowDialog] = useState(false); // Estado para controlar el diálogo
  const [emailSent, setEmailSent] = useState(false); // Estado para controlar si el correo fue enviado
  const navigate = useNavigate(); // Hook para redirigir

  // Simulamos el envío del correo
  const handleSendEmail = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    // Aquí normalmente iría la llamada a la API para enviar el correo de restablecimiento
    setEmailSent(true);
    setShowDialog(true); // Mostrar el cuadro de diálogo cuando se envía el correo
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
          {!emailSent ? (
            <>
              <p className="instruction-text">Introduce tu correo electrónico para recuperar tu cuenta.</p>
              <form onSubmit={handleSendEmail}>
                <input type="email" placeholder="Correo electrónico" required />
                <button type="submit">Enviar</button>
              </form>
            </>
          ) : (
            <>
              {showDialog && (
                <div className="dialog">
                  <p style={{ color: 'black' }}>Hemos enviado un link a tu correo electrónico para restablecer tu contraseña.</p>
                  <button onClick={() => setShowDialog(false)}>Cerrar</button>
                </div>
              )}
            </>
          )}
          
          {/* Pie de página con enlace de navegación */}
          <div className="forgot-password-footer">
            <Link to="/login">Volver al inicio de sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
