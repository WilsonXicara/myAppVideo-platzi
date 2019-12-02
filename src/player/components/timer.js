import React from 'react';
// Styles
import './timer.css';

const Timer = (props) => (
    <div className="Timer">
        <p>
            <span>00 / {props.duration}</span>
        </p>
    </div>
)

export default Timer;