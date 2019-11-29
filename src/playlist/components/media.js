// Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    state = {
        author: 'Wilson Xicará',
    }
    // ECMA Script 7 realiza el bindin de forma automática
    handleClick = (event) => {
        console.log(this.props.image);
        this.setState({
            author: 'Jerson Xicará',
        });
    }
    render() {
        // Similar al constructor
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

// Validando el tipo de propiedad
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;