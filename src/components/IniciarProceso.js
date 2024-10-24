import React, { useState, useEffect } from 'react';
import './IniciarProceso.css';
import * as BpmnEditor from "@kogito-tooling/kie-editors-standalone/dist/bpmn";
import { BuilderView, FormBuilder } from '@react-form-builder/designer';
import { rSuiteComponents } from '@react-form-builder/components-rsuite';

function IniciarProceso() {
    const [formName, setFormName] = useState('');
    const [showFormBuilder, setShowFormBuilder] = useState(false);
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
        setShowFormBuilder(true);  // Mostrar FormBuilder
        setShowEditor(false);      // Ocultar BPM Editor
    };

    const handleWorkflowButtonClick = () => {
        setShowEditor(true);       // Mostrar BPM Editor
        setShowFormBuilder(false); // Ocultar FormBuilder
    };

    const components = rSuiteComponents.map(c => c.build());
    const builderView = new BuilderView(components);

    useEffect(() => {
        if (showEditor) {
            BpmnEditor.open({
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
                <button className="action-button" onClick={handleFormButtonClick}>
                    Formularios
                </button>
                <button className="action-button" onClick={handleWorkflowButtonClick}>
                    Flujo de Trabajo
                </button>
            </div>

            {/* Mostrar solo el editor de formularios si está habilitado */}
            {showFormBuilder && (
                <div style={{ height: '600px', width: '100%' }}>
                    <FormBuilder view={builderView} />
                </div>
            )}

            {/* Mostrar solo el editor BPM si está habilitado */}
            {showEditor && (
                <div id="bpmn-editor-container" style={{ height: '600px', width: '100%' }} />
            )}
        </div>
    );
}

export default IniciarProceso;
