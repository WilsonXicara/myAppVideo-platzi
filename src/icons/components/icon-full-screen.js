import React from 'react';
// Components
import IconBase from './icon-base';

function IconFullScreen(props) {
    return (
        <IconBase {...props}>
            <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
            <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
            <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
            <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
        </IconBase>
    )
}

export default IconFullScreen;