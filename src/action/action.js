import * as types from '../constant/actiontype.js';
import {v4} from 'node-uuid';
import * as api from '../service/api.js';
import {getIsFetching} from '../reducer/root.reducer.js';

//returns a promise which resolves to an action returned by receiveTodos
//such function are called thunk, it returns function.
export const fetchTodos = (filter) => (dispatch,getState) =>{
    if(getIsFetching(getState(),filter)){
        return Promise.resolve();
    }
    dispatch({
        type: types.FETCH_TODOS_REQUEST,
        filter
    });
    return api.fetchTodos(filter).then(response => {
            return dispatch({
                type: types.FETCH_TODOS_SUCCESS,
                filter,
                response
            })
        },
        error => {
            return dispatch({
                type: types.FETCH_TODOS_FAILURE,
                filter,
                message: error.message || 'Something wint wrong!'
            });
        }
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