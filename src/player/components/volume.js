import React from 'react';
// Components
import IconVolume from '../../icons/components/icon-volume';
// Styles
import './volume.css';

const Volume = props => (
    <button className="Volume">
        <IconVolume color="white"
                    size={25} />
        <div className="Volume-range">
            <input type="range"
                   min={0}
                   max={1}
                   step={.05}
                   onChange={props.handleVolumeChange} />
        </div>
    </button>
)

export default Volume;