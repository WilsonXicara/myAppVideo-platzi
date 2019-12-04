// Data
import normalizedData from '../schemas/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    // Para que el reducer pueda agregar la búsqueda realizada
    search: '',
});

function data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO':
            // const query = action.payload.query.toLowerCase();

            // const results = Object.values(state.entities.media).filter(media => media.author.toLowerCase().includes(query));
            // console.log('Resultados:', results)
            // return {
            //     ...state,
            //     search: results,
            // };
            return state.set('search', action.payload.query);
        default:
            return state;
    }
}

export default data;