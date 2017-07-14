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
    render() {
        return (
            <fieldset>
                <legend>Enter temperature in :</legend>
                <input value={this.props.temperature}/>
            </fieldset>
        );
    }
}

import {connect} from 'react-redux';
const ConectedTemperatureInput = connect(
    ({temperature, temperatureType}) => ({temperature, temperatureType}),
    null
)(TemperatureInput);

class Calculator extends Component {
    render() {
        return (
            <div>
                <ConectedTemperatureInput/>
                <ConectedTemperatureInput/>
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
