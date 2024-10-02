import React, { useState } from 'react';
import './IniciarProceso.css';

function IniciarProceso() {
    const [formName, setFormName] = useState(''); // Estado para el nombre del formulario

    const handleInputChange = (event) => {
        setFormName(event.target.value); // Actualiza el nombre del formulario al cambiar el texto
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (formName.trim() !== '') { // Verifica que no esté vacío
                alert(`Formulario guardado: ${formName}`);
                // Aquí podrías implementar lógica adicional si es necesario
            } else {
                alert('Por favor, ingresa un nombre para el formulario.'); // Mensaje de error si el campo está vacío
            }
        }
    };

    const handleFormButtonClick = () => {
        alert('Botón de Formularios presionado');
    };

    const handleWorkflowButtonClick = () => {
        alert('Botón de Flujo de Trabajo presionado');
    };

    return (
        <div className="bpm-system">
            <div className="form-container">
                <input
                    type="text"
                    value={formName}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Nombre del formulario"
                    className="form-name-input"
                />
                <button className="action-button" onClick={handleFormButtonClick}>Formularios</button>
                <button className="action-button" onClick={handleWorkflowButtonClick}>Flujo de Trabajo</button>
            </div>
        </div>
    );
}

export default IniciarProceso;
