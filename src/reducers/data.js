// Data
import normalizedData from '../schemas/index';

const initialState = {
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    // Para que el reducer pueda agregar la búsqueda realizada
    search: [],
};

// El initialState se almacena en el Store de la siguiente forma:
// store: {
//     NOMBRE_FUNCION == data: {
//         ...initialState
//     }
// }
function data(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO':
            const query = action.payload.query.toLowerCase();

            const results = Object.values(state.entities.media).filter(media => media.author.toLowerCase().includes(query));
            console.log('Resultados:', results)
            return {
                ...state,
                search: results,
            };
        default:
            return state;
    }
}

export default data;