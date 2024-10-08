import React, { useState, useEffect } from 'react';
import './IniciarProceso.css';
import * as BpmnEditor from "@kogito-tooling/kie-editors-standalone/dist/bpmn";

function IniciarProceso() {
    const [formName, setFormName] = useState(''); 
    const [showEditor, setShowEditor] = useState(false); 

    const handleInputChange = (event) => {
        setFormName(event.target.value); 
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (formName.trim() !== '') { 
                alert(`Formulario guardado: ${formName}`);
            } else {
                alert('Por favor, ingresa un nombre para el formulario.'); 
            }
        }
    };

    const handleFormButtonClick = () => {
        alert('Botón de Formularios presionado');
    };

    const handleWorkflowButtonClick = () => {
        setShowEditor(true); 
    };

    useEffect(() => {
        if (showEditor) {
            const editor = BpmnEditor.open({
                container: document.getElementById("bpmn-editor-container"),
                initialContent: Promise.resolve(""),
                readOnly: false,
                resources: new Map([
                    [
                        "MiProceso.bpmn",
                        {
                            contentType: "text",
                            content: Promise.resolve("")
                        }
                    ]
                ])
            });
        }
    }, [showEditor]);

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
            {showEditor && (
                <div id="bpmn-editor-container" style={{ height: '600px', width: '100%' }} />
            )}
        </div>
    );
}

export default IniciarProceso;