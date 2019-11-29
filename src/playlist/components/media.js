// Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
import React, { Component } from 'react';
import './media.css';

class Media extends Component {
    render() {
        // Similar al constructor
        //
        // Convenciones:
        // - Por convención, se utiliza escritura camelCase para atributos CSS
        //      font-size: 14px;        ->  fontSize: 14
        //      background-color: red;  ->  backgroundColor: 'red'
        // - Por defecto, si la medida es en 'px' puede omitirse el sufijo; si es diferente, se especifica entre ''
        //
        // Style inline
        const styles = {
            container: {
                fontSize: 24,
                // backgroundColor: 'red',
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img className="Media-image" src="./images/covers/bitcoin.jpg" alt="" width={260} height={160}/>
                    <h3 className="Media-title">¿Por qué aprender React?</h3>
                    <p className="Media-author">WiilsonXicará</p>
                </div>
            </div>
        )
    }
}

export default Media;