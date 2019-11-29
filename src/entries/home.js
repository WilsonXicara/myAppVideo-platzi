import React from 'react';
import { render } from 'react-dom'; // Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
// Components
import Home from '../pages/containers/home';
// Data
import data from '../assets/api.json';

const CONTAINER = document.getElementById('app');

// ReactDOM.render(QUE-SE-RENDERIZA, DÓNDE-SE-RENDERIZA);
render(<Home data={data} />, CONTAINER);