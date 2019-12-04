import React, { Component } from  'react';
// Components
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import VideoPlayer from '../../player/containers/video-player';
// Error handler
import HandleError from '../../errors/containers/handle-error';
// React Redux
import { connect } from 'react-redux';
// Immutable
import { List as list } from 'immutable';

class Home extends Component {
    handleOpenModal = (idMedia) => {
        this.props.dispatch({
            type: 'OPEN_MODAL',
            payload: {
                mediaId: idMedia
            }
        });
    }
    handleCloseModal = (event) => {
        this.props.dispatch({
            type: 'CLOSE_MODAL'
        });
    }
    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories categories={this.props.categories}
                                handleOpenModal={this.handleOpenModal}
                                search={this.props.search} />
                    {
                        // Operador ternario, sin else
                        this.props.modal.get('visibility') && 
                        <ModalContainer>
                                <Modal handleClick={this.handleCloseModal}>
                                    <VideoPlayer autoplay={true}
                                                 mediaId={this.props.modal.get('mediaId')}
                                    />
                                </Modal>
                            </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props) {
    console.log('STATE:', state);
    // Obteniendo las categorías de los datos normalizados
    const categories = state.get('data').get('categories').map(categoryId => {
        return state.get('data').get('entities').get('categories').get(categoryId);
    });
    let searchResults = list();
    const textSearch = state.get('data').get('search').toLowerCase();
    if (textSearch) {
        const mediaList = state.get('data').get('entities').get('media');
        searchResults = mediaList.filter(itemMap => itemMap.get('author').toLowerCase().includes(textSearch)).toList();
    }
    // Devolviendo nuevas propiedades para Home
    return {
        categories,
        search: searchResults,
        modal: state.get('modal')
    }
}

export default connect(mapStateToProps)(Home);