import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {default as TodoList} from '../component/todolist.component.js';
import {toggleTodo} from '../action/action.js';

const getVisibleTodos = (todos,filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(
        t => t.completed
      );
    case 'active':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}
//take the props that depends upon state obj or store.
const mapPropsToState = (state,{match:{params}}) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      params.filter
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
const VisibleToDoList = withRouter(connect(mapPropsToState, mapPropsToDispatch)(TodoList));
export default VisibleToDoList;