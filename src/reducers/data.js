// Data
import normalizedData from '../schemas/index';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    // Para que el reducer pueda agregar la búsqueda realizada
    search: '',
});

function data(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ENTITIES:
            return state.set('search', action.payload.query);
        default:
            return state;
    }
}

export default data;