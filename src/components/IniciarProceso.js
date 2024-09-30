import React from 'react';
import axios from 'axios';
import './IniciarProceso.css';

function IniciarProceso() {
    const iniciarProceso = async () => {
        try {
            const response = await axios.post('http://localhost:8080/engine-rest/process-definition/key/miProceso/start', {
                variables: {
                    // Aquí puedes incluir variables del proceso si es necesario
                }
            });
            console.log('Proceso iniciado:', response.data);
        } catch (error) {
            console.error('Error al iniciar el proceso:', error);
        }
    };

    return (
        <div className="bpm-system">
            <h2>Bienvenido al Sistema BPM</h2>
            <p>Aquí puedes iniciar, gestionar y monitorear tus procesos de negocio.</p>
            <button onClick={iniciarProceso}>Iniciar Proceso</button>
        </div>
    );
}

export default IniciarProceso;
