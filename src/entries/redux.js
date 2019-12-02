import { createStore } from 'redux';

const FORM_CONTAINER = document.getElementById('form');
// Escuchando el evento del Submit
FORM_CONTAINER.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();     // Para evitar que el formulario recargue la página al hacer un submit
    const data = new FormData(FORM_CONTAINER);  // Guarda los datos del formulario
    const title = data.get('title');    // Obteniendo el contenido del formulario
    console.log('Title:', title);
}

const initialState = [
    {
        "title": "Title 1",
    },
    {
        "title": "Title 2",
    },
    {
        "title": "Title 3",
    }
];

// const STORE = createStore(
//     reducer,
//     initialState,
//     enhancer,
// )
const STORE = createStore(
    (state) => state,
    initialState,
    // Según https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)