import React from 'react';
import { render } from 'react-dom'; // Esta importación es posible gracias a la habilidad de desestructuración de JavaScript
// Components
import Home from '../pages/containers/home';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
// Middlewares
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// Async middleware
import thunk from 'redux-thunk';

// function logger({ getState, dispatch }) {
//     return (next) => {
//         return (action) => {
//             console.log('Envío de acción:', action);
//             console.log('Estado anterior:', getState().toJS());
//             const value = next(action);
//             console.log('Nuevo estado:', getState().toJS());
//             return value;
//         }
//     }
// }
// const myLogger = ({ getState, dispatch }) => next => action => {
//     console.log('Envío de acción:', action);
//     console.log('Estado anterior:', getState().toJS());
//     const value = next(action);
//     console.log('Nuevo estado:', getState().toJS());
//     return value;
// }

const store = createStore(
    reducer,    // Reducer
    // Al manejar 'immutable' el estado se maneja como un mapa propio de 'immutable'
    map(),      // El estado inicial se inicializa en cada reducer
    composeWithDevTools(
        // Esta función aplica el middleware de las herramientas de desarrollo
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // Enhancer
        applyMiddleware(
            // Se proporcionan los demás Middleware como parámetro
            logger,
            thunk
        )   // Convierte mi middleware en un enhancer
    )
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