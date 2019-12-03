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
                    <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal} />
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

export default Home;