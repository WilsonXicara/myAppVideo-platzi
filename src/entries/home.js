import React from 'react';
import { render } from 'react-dom'; // Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
// Components
import Home from '../pages/containers/home';
// Data
import data from '../assets/api.json';
import normalizedData from '../schemas/index';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';

console.log('DATA:', normalizedData);

const initialState = {
    data: {
        ...data,
    },
    // Para que el reducer pueda agregar la búsqueda realizada
    search: [],
};

const store = createStore(
    reducer,                // Reducer
    initialState,           // Estado inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // Enhancer
);

console.log(store.getState());

const HOME_CONTAINER = document.getElementById('home-container');

// ReactDOM.render(QUE-SE-RENDERIZA, DÓNDE-SE-RENDERIZA);
render(
    // High order component. Heredan cosas a los componentes hijos
    <Provider store={store}>
        <Home />
    </Provider>,
    HOME_CONTAINER
);