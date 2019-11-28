// Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
import React, { Component } from 'react';

class Media extends Component {
    render() {
        // Similar al constructor
        return (
            <div>
                <div>
                    <img src="" alt="" width={260} height={160}/>
                    <h3>¿Por qué aprender React?</h3>
                    <p>WiilsonXicará</p>
                </div>
            </div>
        )
    }
}

export default Media;