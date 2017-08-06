import * as types from '../constant/actiontype.js';
import {v4} from 'node-uuid';
import * as api from '../service/api.js';
import {getIsFetching} from '../reducer/root.reducer.js';

const receiveTodos = (filter,response) => ({
    type: types.RECEIVE_TODO,
    filter,
    response
});
const requestTodos = (filter) => ({
    type: types.REQUEST_TODO,
    filter
});
//returns a promise which resolves to an action returned by receiveTodos
//such function are called thunk, it returns function.
export const fetchTodos = (filter) => (dispatch,getState) =>{
    if(getIsFetching(getState(),filter)){
        return;
    }
    dispatch(requestTodos(filter));
    return api.fetchTodos(filter).then(response => 
        dispatch(receiveTodos(filter,response))
    );
}
export const addTodo = (value) => {
	return {
        type: types.ADD_TODO,
        id: v4(),
        text: value
    };
}

export const toggleTodo = (id) => {
	return {
		type: types.TOGGLE_TODO,
		id
    };
}