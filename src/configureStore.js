import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import {default as todoApp} from './reducer/statereducers.js';
import {loadState, saveState} from './service/localstorage.service.js';

const congigureStore = () =>{
    const persistedState = loadState();
    const store = createStore(todoApp,persistedState);

    store.subscribe(throttle(() =>{
        saveState({
            todos: store.getState().todos
        });
    },1000));
    return store;
}
 export default congigureStore;