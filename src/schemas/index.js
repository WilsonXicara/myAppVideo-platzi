import api from '../assets/api.json';
// Normalizer
import { normalize, schema } from 'normalizr';

// Estructura
// const ESQUEMA = new schema.Entity(KEY, SCHEMA_DEFINITION, OPTIONS);

const media = new schema.Entity('media', {}, {
    idAttribute: 'id',  // El campo que tomará como ID. Por defecto busca 'id'
    // Atributos que toma del objeto padre
    processStrategy: (value, parent, key) => ({
        ...value,
        // De esta forma, Media almacena el ID del Category al que pertenece
        category_id: parent.id
    })
});

const category = new schema.Entity(
    'categories',
    {
        // Indico que un Category contiene un listado de Media
        // De esta forma, un Category almacenará un array de los IDs de Media que tiene asociado, y no un array de objetos
        playlist: new schema.Array(media)
    },
    {}
);

const categories = {
    categories: new schema.Array(category)
};

// Normalizando los datos
const normalizedData = normalize(api, categories);

export default normalizedData;