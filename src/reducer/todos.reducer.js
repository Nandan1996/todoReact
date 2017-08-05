import {combineReducers} from 'redux';

import * as actionTypes from '../constant/actiontype.js';
import todo  from './todo.reducer.js';

//may incur sync problem when using several array with same todo
const byId = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id],action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
	switch(action.type){
		case actionTypes.ADD_TODO:
			return [...state,action.id];
		default:
			return state;
	}
}

const todos = combineReducers({
	byId,
	allIds
})
export default todos;

//selector
const getAllTodos = (state) => {
	return state.allIds.map(id => state.byId[id]);
}

export const getVisibleTodos = (state,filter) => {
	const allTodos = getAllTodos(state);
	switch (filter) {
	case 'all':
		return allTodos;
	case 'completed':
		return allTodos.filter(
		t => t.completed
		);
	case 'active':
		return allTodos.filter(
		t => !t.completed
		);
	default:
		throw new Error(`unknown filter ${filter}.`);
	}
}