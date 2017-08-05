import { createStore } from 'redux';

import {default as rootReducer} from './reducer/root.reducer.js';
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
    const store = createStore(rootReducer);
    if(process.env.NODE_ENV !== 'production'){
        store.dispatch = addLogingToDispatch(store);
    }
    return store;
}
 export default congigureStore;