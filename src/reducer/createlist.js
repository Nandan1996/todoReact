import {combineReducers} from 'redux';

import * as actionTypes from '../constant/actiontype.js';

const createList = (filter) => {
    const ids = (state = [],action) => {
        if(action.filter !== filter)
            return state;
        switch(action.type){
            case actionTypes.FETCH_TODOS_SUCCESS:
                return action.response.map(todo => todo.id);
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
    return combineReducers({
        ids,
        isFetching
    });
}

export default createList;
export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;