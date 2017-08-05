import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import {default as rootReducer} from './reducer/root.reducer.js';
import {loadState, saveState} from './service/localstorage.service.js';

const  addLogingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if(!console.group){
        return rawDispatch;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c prev state','color: gray',store.getState());
        console.log('%c action','color:blue',action);
        const returnValue = rawDispatch(action);
        console.log('%c next state','color: green',store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}
const congigureStore = () =>{
    const persistedState = loadState();
    const store = createStore(rootReducer,persistedState);
    if(process.env.NODE_ENV !== 'production'){
        store.dispatch = addLogingToDispatch(store);
    }
    store.subscribe(throttle(() =>{
        saveState({
            todos: store.getState().todos
        });
    },1000));
    return store;
}
 export default congigureStore;