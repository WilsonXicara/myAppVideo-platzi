import React, { Component } from 'react';
// Styles
import './video.css';

// Aquí se implementa un componente de UI como un componente de lógica debido a que debe
// manejar mucha interacción con el usuario
class Video extends Component {
    componentWillReceiveProps(nextProps) {
        // Se ejecuta cuando hay cambios en las propiedades
        (nextProps.pause !== this.props.pause) && this.togglePlayVideo();
    }
    togglePlayVideo() {
        this.props.pause ? this.video.play() : this.video.pause();
    }
    setRef = element => {
        this.video = element;
    }
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked,
        } = this.props;
        return (
            <div className="Video">
                <video autoPlay={this.props.autoplay}
                       src={this.props.src}
                       ref={this.setRef}
                       onLoadedMetadata={handleLoadedMetadata}
                       onTimeUpdate={handleTimeUpdate}
                       onSeeking={handleSeeking}
                       onSeeked={handleSeeked} />
            </div>
        )
    }
}

export default Video;