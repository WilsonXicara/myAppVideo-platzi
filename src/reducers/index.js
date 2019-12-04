import data from './data';
import modal from './modal';
import isLoading from './is-loading';
// Redux Immutable
//     De esta forma, es definitivo que los estados serán inmutables
//     Por lo tanto, hay que utilizar métodos especiales para acceder a los estados
import { combineReducers } from 'redux-immutable';

// El initialState se almacena en el Store de la siguiente forma:
// store: {
//     data: { ... },
//     modal: { ... },
//     isLoading: { ... }
// }
const rootReducer = combineReducers({
    data,
    modal,
    isLoading,
});

export default rootReducer;