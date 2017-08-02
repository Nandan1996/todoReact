import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import throttle from 'lodash/throttle';

import {default as todoApp} from './reducer/statereducers.js';
import TodoApp from './component/app.component.js';

import {loadState, saveState} from './service/localstorage.service.js';

const persistedState = loadState();
const store = createStore(todoApp,persistedState);

store.subscribe(throttle(() =>{
    saveState({
        todos: store.getState().todos
    });
},1000));

ReactDOM.render(
    <Provider store={store}><TodoApp/></Provider>,
    document.getElementById('root')
 );