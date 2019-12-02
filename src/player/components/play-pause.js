import React from 'react';
// Components
import IconPlay from '../../icons/components/icon-play';
import IconPause from '../../icons/components/icon-pause';
// Styles
import './play-pause.css';

const PlayPause = (props) => (
    <div className="PlayPause">
        {
            props.pause ?
                <button onClick={props.handleClick}>
                    <IconPlay size={25} color="white" />
                </button> :
                <button onClick={props.handleClick}>
                    <IconPause size={25} color="white" />
                </button>
        }
    </div>
)

export default PlayPause;