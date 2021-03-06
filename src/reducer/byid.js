import * as actionTypes from '../constant/actiontype.js';

//may incur sync problem when using several array with same todo
const byId = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.FETCH_TODOS_SUCCESS:
			const nextState = {...state};
			action.response.forEach(todo => nextState[todo.id] = todo);
			return nextState;
        case actionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                [action.response.id]: action.response
            };
		default:
			return state;
	}
};

export default byId;
export const getTodo = (state,id) => state[id];