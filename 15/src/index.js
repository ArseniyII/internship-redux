import {render} from 'react-dom';
import React, {Component} from 'react';

const initialState = {
    temperature: 0,
    temperatureType: 'Сelsius'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGETEMPERATURE':
            const {temperature, temperatureType} = action;
            return {
                temperature,
                temperatureType
            };
        default:
            return state;
    }
};

function changeTemperature(temperature, temperatureType) {
    return {
        type: 'CHANGETEMPERATURE',
        temperature,
        temperatureType
    };
}

import {createStore}  from 'redux'
const store = createStore(reducer);

function BoilingVerdict() {
    return <p>The water ...</p>;
}
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.changeTemperature(e.target.value, this.props.scale);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in {this.props.scale}:</legend>
                <input value={this.props.temperature}
                       onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

import {connect} from 'react-redux';
const ConectedTemperatureInput = connect(
    ({temperature, temperatureType}) => ({temperature, temperatureType}),
    {
        changeTemperature: changeTemperature
    }
)(TemperatureInput);

class Calculator extends Component {
    render() {
        return (
            <div>
                <ConectedTemperatureInput scale='Сelsius'/>
                <ConectedTemperatureInput scale='Fahrenheit'/>
                <BoilingVerdict/>
            </div>
        );
    }
}

import {Provider} from 'react-redux';

render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);
