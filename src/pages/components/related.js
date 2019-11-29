import React from 'react';
// Styles
import './related.css';
// Assets
import logo from '../../../images/logo.png';

function Related(props) {
    return (
        <div className="Related">
            <img src={logo} alt="LOGO" width={250}/>
        </div>
    )
}

export default Related;