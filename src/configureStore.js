import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import {default as rootReducer} from './reducer/root.reducer.js';
import {loadState, saveState} from './service/localstorage.service.js';

const congigureStore = () =>{
    const persistedState = loadState();
    const store = createStore(rootReducer,persistedState);

    store.subscribe(throttle(() =>{
        saveState({
            todos: store.getState().todos
        });
    },1000));
    return store;
}
 export default congigureStore;