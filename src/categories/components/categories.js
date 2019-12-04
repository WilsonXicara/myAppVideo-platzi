import React from 'react';
// Components
import Category from './category';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';
// Styles
import './categories.css';

function Categories(props) {
    return (
        <div className="Categories">
            <Search />
            {
                props.isLoading &&
                <h3>Buscando tus videos favoritos...</h3>
            }
            {
                props.search.map(item => {
                    // Ahora 'item' es un map, por lo que hay que llamar a 'toJS()' para volverlo un objeto
                    return <Media key={item.get('id')}
                                  openModal={props.handleOpenModal}
                                  {...item.toJS()} />
                })
            }
            {
                props.categories.map(category => {
                    return (
                        <Category key={category.get('id')}
                                  {...category.toJS()}
                                  handleOpenModal={props.handleOpenModal} />
                    )
                })
            }
        </div>
    )
}

export default Categories;