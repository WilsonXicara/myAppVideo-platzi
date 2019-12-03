function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO':
            const query = action.payload.query.toLowerCase();
            const results = [];
            if (action.payload.query) {
                state.data.categories.forEach(category => {
                    results.push.apply(
                        results,
                        // Para que la búsqueda no sea Case sensitive
                        category.playlist.filter(item => item.author.toLowerCase().includes(query))
                    );
                });
            }
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