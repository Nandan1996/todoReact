import {connect} from 'react-redux';

import * as types from '../constant/actiontype.js';
import {default as TodoList} from '../component/todolist.component.js';
import {toggleTodo} from '../action/action.js';

const getVisibleTodos = (todos,filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      return todos;
    case types.SHOW_COMPLETED:
      return todos.filter(
        t => t.completed
      );
    case types.SHOW_ACTIVE:
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}
//take the props that depends upon state obj or store.
const mapPropsToState = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

//take the props that depends upon dispatch function
const mapPropsToDispatch = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
}
const VisibleToDoList = connect(mapPropsToState, mapPropsToDispatch)(TodoList);
export default VisibleToDoList;