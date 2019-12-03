import React from 'react';
// Components
import Category from './category';
import Search from '../../widgets/containers/search';
// Styles
import './categories.css';

function Categories(props) {
    return (
        <div className="Categories">
            <Search />
            {
                props.categories.map(category => {
                    return (
                        <Category key={category.id} {...category} handleOpenModal={props.handleOpenModal} />
                    )
                })
            }
        </div>
    )
}

export default Categories;