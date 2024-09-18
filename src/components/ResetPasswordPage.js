import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook para navegar
import './LoginPage.css'; // Reutilizamos los mismos estilos

function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false); // Para el cuadro de "Contraseña restablecida"
  const [showRedirectDialog, setShowRedirectDialog] = useState(false); // Para el cuadro de "Redirigiendo"
  const navigate = useNavigate();

  // Simulamos la lógica de restablecimiento
  const handleResetPassword = (event) => {
    event.preventDefault();
    
    // Validación de contraseñas
    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Simulación de restablecimiento exitoso
    setShowSuccessDialog(true);

    // Mostrar "Redirigiendo..." después de 5 segundos, luego redirigir después de otros 5 segundos
    setTimeout(() => {
      setShowSuccessDialog(false);
      setShowRedirectDialog(true);

      setTimeout(() => {
        navigate('/login');
      }, 5000); // Redirige después de 5 segundos de mostrar "Redirigiendo..."
    }, 5000); // Cambia el cuadro de diálogo después de 5 segundos
  };

  return (
    <div className="login-page">
      <div className="background-blur"></div>
      <div className="login-container">
        <div className="login-header">
          <h1>Restablecer Contraseña</h1>
        </div>
        <div className="login-body">
          <form onSubmit={handleResetPassword}>
            <input 
              type="password" 
              placeholder="Nueva Contraseña" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required 
            />
            <input 
              type="password" 
              placeholder="Confirmar Contraseña" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
            <button type="submit">Restablecer</button>
          </form>
          
          {/* Mostrar cuadros de diálogo */}
          {showSuccessDialog && (
            <div className="dialog">
              <p style={{ color: 'black' }}>Contraseña restablecida exitosamente.</p>
            </div>
          )}

          {showRedirectDialog && (
            <div className="dialog">
              <p style={{ color: 'black' }}>Redirigiendo...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
