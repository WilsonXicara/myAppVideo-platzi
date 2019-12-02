import React, { Component } from 'react';
// Styles
import './video.css';

// Aquí se implementa un componente de UI como un componente de lógica debido a que debe
// manejar mucha interacción con el usuario
class Video extends Component {
    render() {
        return (
            <div className="Video">
                <video autoPlay={this.props.autoplay}
                    src={this.props.src} />
            </div>
        )
    }
}

export default Video;