import React from 'react';
import { render } from 'react-dom'; // Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
// Components
import Home from '../pages/containers/home';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import reducer from '../reducers/index';
import { Map as map } from 'immutable';

const store = createStore(
    reducer,    // Reducer
    // Al manejar 'immutable' el estado se maneja como un mapa propio de 'immutable'
    map(),      // El estado inicial se inicializa en cada reducer
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