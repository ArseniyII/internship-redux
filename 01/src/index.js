import React from 'react';
import {render} from 'react-dom';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

import {createStore}  from 'redux'
const store = createStore(counter);

store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

render(
    <div>Open Console</div>,
    document.getElementById('root')
);
