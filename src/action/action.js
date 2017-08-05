import * as types from '../constant/actiontype.js';
import {v4} from 'node-uuid';

export const receiveTodos = (filter,response) => ({
    type: types.RECEIVE_TODO,
    filter,
    response
});

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