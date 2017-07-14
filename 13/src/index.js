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

store.dispatch(
    changeTemperature(100, 'Сelsius')
);
console.log(store.getState());
store.dispatch(
    changeTemperature(200, 'Fahrenheit')
);
console.log(store.getState());

function BoilingVerdict() {
    return <p>The water ...</p>;
}

class TemperatureInput extends Component {
    render() {
        return (
            <fieldset>
                <legend>Enter temperature in :</legend>
                <input/>
            </fieldset>
        );
    }
}

class Calculator extends Component {
    render() {
        return (
            <div>
                <TemperatureInput/>
                <TemperatureInput/>
                <BoilingVerdict/>
            </div>
        );
    }
}

render(
    <Calculator />,
    document.getElementById('root')
);
