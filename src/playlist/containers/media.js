import React, { Component } from 'react';
// Components
import Media from '../components/media';
// 
import { connect } from 'react-redux';
// Actions creator
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {
    openModal = idMedia => {
        // De esta forma se hace el bind de this a la función
        this.props.actions.openModal(idMedia);
    }
    render() {
        return <Media {...this.props.data.toJS()}
                      openModal={this.openModal} />
    }
}

function mapStateToProps(state, props) {
    // Aquí se hace la asignación del '.dispatch()' a 'props'
    return {
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);