import React, { Component } from 'react';
// Components
import Media from '../components/media';
// 
import { connect } from 'react-redux';

class MediaContainer extends Component {
    render() {
        return <Media {...this.props.data} openModal={this.props.openModal} />
    }
}

function mapStateToProps(state, props) {
    return {
        data: state.data.entities.media[props.id]
    }
}

export default connect(mapStateToProps)(MediaContainer);