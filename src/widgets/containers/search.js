import React, { Component } from 'react';
// Component
import Search from '../components/search';
// Provider
import { connect } from 'react-redux';

class SearchContainer extends Component {
    state = {
        value: 'Texto por defecto'
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value, 'submit');
        this.props.dispatch({
            type: 'SEARCH_VIDEO',
            payload: {
                query: this.input.value
            }
        })
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