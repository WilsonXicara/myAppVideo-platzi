import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
    render() {
        // createPortal(QUE-VA-A-RENDERIZAR, DONDE-LO-VA-A-RENDERIZAR)
        return createPortal(
            this.props.children,
            document.getElementById('modal-container')
        )
    }
}

export default ModalContainer;