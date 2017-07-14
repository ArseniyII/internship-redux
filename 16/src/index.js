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

            function toCelsius(fahrenheit) {
                return (fahrenheit - 32) * 5 / 9;
            }

            function toFahrenheit(celsius) {
                return (celsius * 9 / 5) + 32;
            }

            function tryConvert(temperature, convert) {
                const input = parseFloat(temperature);
                if (Number.isNaN(input)) {
                    return '';
                }
                const output = convert(input);
                const rounded = Math.round(output * 1000) / 1000;
                return rounded.toString();
            }

            const toProperMeasure = this.props.temperatureType === 'Сelsius' ? toCelsius : toFahrenheit;

            let value = '';

            if (this.props.scale === this.props.temperatureType) {
                value = this.props.temperature;
            } else {
                value = tryConvert(this.props.temperature, toProperMeasure);
            }

        return (
            <fieldset>
                <legend>Enter temperature in {this.props.scale}:</legend>
                <input value={value}
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
