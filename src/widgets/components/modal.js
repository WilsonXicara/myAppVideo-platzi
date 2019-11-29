import React from 'react';
// Styles
import './modal.css';

function Modal(props) {
    return (
        <div className="Modal">
            Esto es un modal
            {props.children}
            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal;