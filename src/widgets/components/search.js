import React from 'react';
// Styles
import './search.css';

// function Search(props) {
//     return (
//         <h1></h1>
//     )
// }

const Search = (props) => (
    <form
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text"
            name="search"
            className="Search-input"
            placeholder="Busca tu video favorito"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search;