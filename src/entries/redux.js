import { createStore } from 'redux';

const FORM_CONTAINER = document.getElementById('form');
// Escuchando el evento del Submit
FORM_CONTAINER.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();     // Para evitar que el formulario recargue la página al hacer un submit
    const data = new FormData(FORM_CONTAINER);  // Guarda los datos del formulario
    const title = data.get('title');    // Obteniendo el contenido del formulario
    console.log('Title:', title);
    STORE.dispatch({
        type: 'ADD_SONG',
        data: {
            title,
        }
    });
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

const reducer = function(state, action) {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.data];
        default:
            return state;
    }
}

// const STORE = createStore(
//     reducer,
//     initialState,
//     enhancer,
// )
const STORE = createStore(
    reducer,
    initialState,
    // Según https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function render() {
    const CONTAINER_PLAYLIST = document.getElementById('playlist');
    CONTAINER_PLAYLIST.innerHTML = '';      // Para borrar su contenido previo a renderizar nuevamente
    const playlist = STORE.getState();
    playlist.forEach((item, index) => {
        const template = document.createElement('p');
        template.textContent = item.title;
        CONTAINER_PLAYLIST.appendChild(template);
    });
}
render();   // Para que se ejecute en la carga del Entry

function handleChange() {
    render();
}

STORE.subscribe(handleChange);

console.log(STORE.getState());