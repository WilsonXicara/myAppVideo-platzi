import React, { Component } from 'react';
// Components
import Media from '../components/media';
// 
import { connect } from 'react-redux';
// Actions creator
import { openModal } from '../../actions/index';

class MediaContainer extends Component {
    openModal = idMedia => {
        // De esta forma se hace el bind de this a la función
        this.props.dispatch(openModal(idMedia));
    }
    render() {
        return <Media {...this.props.data.toJS()}
                      openModal={this.openModal} />
    }
}

function mapStateToProps(state, props) {
    return {
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}

// Aquí se hace la asignación del '.dispatch()' a 'props'
export default connect(mapStateToProps)(MediaContainer);