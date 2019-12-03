import React from 'react';
// Styles
import './timer.css';

const Timer = (props) => (
    <div className="Timer">
        <p>
            <span>{props.currentTime} / {props.duration}</span>
        </p>
    </div>
)

export default Timer;