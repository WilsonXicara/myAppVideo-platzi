import data from './data';
import modal from './modal';
// Redux
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    data,
    modal,
});

export default rootReducer;