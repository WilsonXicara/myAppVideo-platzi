// Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    // Enlazando propiedades del DOM a la clase
    //
    // == > ECMA Script 6
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // handleClick(event) {
    //     console.log(this.props.title);
    // }
    //
    // == > ECMA Script 7
    // Realiza el bindin de forma automática
    handleClick = (event) => {
        console.log(this.props.image);
    }
    render() {
        // Similar al constructor
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.image} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

// Validando el tipo de propiedad
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;