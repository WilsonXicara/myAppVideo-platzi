import React from 'react';
// Styles
import './video-player-layout.css';

const VideoPlayerLayout = (props) => (
    <div className="VideoPlayer">
        {props.children}
    </div>
)

export default VideoPlayerLayout;