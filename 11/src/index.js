import {render} from 'react-dom';
import React, {Component} from 'react';

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
