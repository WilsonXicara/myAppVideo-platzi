import React from 'react';
// Styles
import './video-player-controls.css';

const VideoPlayerControls = props => (
    <div className="VideoPlayerControls">
        {props.children}
    </div>
)

export default VideoPlayerControls;