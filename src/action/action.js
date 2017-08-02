import * as types from '../constant/actiontype.js';

let nextTodoId = 0;
export const addTodo = (value) => {
	return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text: value
    };
}

export const setVisibilityFilter = (filter) => {
	return {
         type: types.SET_VISIBILITY_FILTER,
         filter
      };
}

export const toggleTodo = (id) => {
	return {
		type: types.TOGGLE_TODO,
		id
    };
}