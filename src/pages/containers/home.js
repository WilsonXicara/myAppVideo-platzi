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

class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = (event) => {
        this.setState(
            {
                modalVisible: false,
            }
        );
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
                        this.state.modalVisible && 
                        <ModalContainer>
                                <Modal handleClick={this.handleCloseModal}>
                                    <VideoPlayer autoplay={true}
                                                 src={this.state.media.src}
                                                 title={this.state.media.title} />
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
    const categories = state.data.categories.map(categoryId => {
        return state.data.entities.categories[categoryId];
    });
    // Devolviendo nuevas propiedades para Home
    return {
        categories,
        search: state.search,
    }
}

export default connect(mapStateToProps)(Home);