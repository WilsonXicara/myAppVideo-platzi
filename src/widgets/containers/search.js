import React, { Component } from 'react';
// Component
import Search from '../components/search';
// Provider
import { connect } from 'react-redux';
// Actions creator
import { searchEntities } from '../../actions/index';

class SearchContainer extends Component {
    state = {
        value: 'Texto por defecto'
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(searchEntities(this.input.value));
    }
    setInputRef = element => {
        this.input = element;
    }
    handleInputChange = event => {
        this.setState({
            value: event.target.value,
        });
    }
    render() {
        return (
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }
}

// Una de las funcionalidades del 'connect()' es asignarle a this.props la función 'dispatch()'
export default connect()(SearchContainer);