import * as types from '../constant/actiontype.js';
import {v4} from 'node-uuid';
import * as api from '../service/api.js';

const receiveTodos = (filter,response) => ({
    type: types.RECEIVE_TODO,
    filter,
    response
});
export const requestTodos = (filter) => ({
    type: types.REQUEST_TODO,
    filter
});
//returns a promise which resolves to an action returned by receiveTodos
export const fetchTodos = (filter) => 
    api.fetchTodos(filter).then(response => 
        receiveTodos(filter,response)
    );

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