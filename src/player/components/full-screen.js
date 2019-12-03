import React from 'react';
// Components
import IconFullScreen from '../../icons/components/icon-full-screen';
// Styles
import './full-screen.css';

const FullScreen = props => (
    <div className="FullScreen"
         onClick={props.handleFullScreenClick}>
        <IconFullScreen size={25}
                        color="white" />
    </div>
)

export default FullScreen;