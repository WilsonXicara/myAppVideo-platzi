import React from 'react';
import { render } from 'react-dom'; // Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
// Components
import Playlist from './src/playlist/components/playlist';
// Data
import data from './src/assets/api.json';

// console.log('HOLA MUNDO!')

const CONTAINER = document.getElementById('app');

// ReactDOM.render(QUE-SE-RENDERIZA, DÓNDE-SE-RENDERIZA);
const holaMundo = <h1>Hola Mundo Programación en ReactJS</h1>;
render(
    <Playlist data={data} />,
    CONTAINER
);