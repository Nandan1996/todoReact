import { createStore,applyMiddleware } from 'redux';
import {default as logger} from 'redux-logger';
import {default as rootReducer} from './reducer/root.reducer.js';

const thunk = (store) => (next) => (action) => {
    if(typeof action === 'function')
        return action(store.dispatch,store.getState);
    return next(action);
}

const congigureStore = () =>{
    //order in which action propogates throw middlewares.
    const middlewares = [thunk];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(logger);
    }
    return createStore(rootReducer,applyMiddleware(...middlewares));
}
 export default congigureStore;