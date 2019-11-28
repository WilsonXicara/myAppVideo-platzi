import React from 'react';
import { render } from 'react-dom'; // Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
// Components
import Media from './src/playlist/components/media';

// console.log('HOLA MUNDO!')

const CONTAINER = document.getElementById('app');

// ReactDOM.render(QUE-SE-RENDERIZA, DÓNDE-SE-RENDERIZA);
const holaMundo = <h1>Hola Mundo Programación en ReactJS</h1>;
render(<Media />, CONTAINER);