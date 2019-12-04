import data from './data';
import modal from './modal';
// Redux Immutable
//     De esta forma, es definitivo que los estados serán inmutables
//     Por lo tanto, hay que utilizar métodos especiales para acceder a los estados
import { combineReducers } from 'redux-immutable';

// El initialState se almacena en el Store de la siguiente forma:
// store: {
//     data: { ... },
//     modal: { ... }
// }
const rootReducer = combineReducers({
    data,
    modal,
});

export default rootReducer;