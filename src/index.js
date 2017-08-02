import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import {Provider, connect} from 'react-redux';

import {default as todoApp} from './reducer/statereducers.js';
import TodoApp from './component/app.component.js';

ReactDOM.render(
    <Provider store={createStore(todoApp)}><TodoApp/></Provider>,
    document.getElementById('root')
 );