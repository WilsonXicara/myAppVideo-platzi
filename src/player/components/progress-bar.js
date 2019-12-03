import React from 'react';
// Styles
import './progress-bar.css';

const ProgressBar = props => (
    <div className="ProgressBar">
        <input type="range"
               min={0}
               max={props.duration}
               defaultValue={props.value}
               onChange={props.handleProgressChange} />
    </div>
)

export default ProgressBar;