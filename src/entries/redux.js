import React from 'react';
import { render } from 'react-dom';

const FORM_CONTAINER = document.getElementById('form');
// Escuchando el evento del Submit
FORM_CONTAINER.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();     // Para evitar que el formulario recargue la página al hacer un submit
    const data = new FormData(FORM_CONTAINER);  // Guarda los datos del formulario
    const title = data.get('title');    // Obteniendo el contenido del formulario
    console.log('Title:', title);
}