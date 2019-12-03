import React from 'react';
// Styles
import './spinner.css';

const Spinner = props => {
    if (!props.isLoading) return null
    return (
        <div className="Spinner">
            <span>Cargando...</span>
        </div>
    )
}

export default Spinner;