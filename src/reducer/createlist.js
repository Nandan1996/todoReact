import {combineReducers} from 'redux';

import * as actionTypes from '../constant/actiontype.js';

const createList = (filter) => {
    const ids = (state = [],action) => {
        switch(action.type){
            case actionTypes.FETCH_TODOS_SUCCESS:
                return action.filter === filter ? action.response.map(todo => todo.id) : state ;
            case actionTypes.ADD_TODO_SUCCESS:
                return filter !== 'completed' ? [...state,action.response.id] : state
            default:
                return state;
        }
    };

    const isFetching = (state = false,action) => {
        if(action.filter !== filter)
            return state;
        switch(action.type){
            case actionTypes.FETCH_TODOS_REQUEST:
                return true;
            case actionTypes.FETCH_TODOS_SUCCESS:
            case actionTypes.FETCH_TODOS_FAILURE:
                return false;
            default:
                return state;
        }
    };
    const errorMessage = (state=null,action) => {
        if(action.filter !== filter){
            return state;
        }
        switch(action.type){
            case actionTypes.FETCH_TODOS_FAILURE:
                return action.message;
            case actionTypes.FETCH_TODOS_REQUEST:
            case actionTypes.FETCH_TODOS_SUCCESS:
                return null;
            default:
                return state;
        }
    }
    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
}

export default createList;
export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;