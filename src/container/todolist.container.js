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
const mapStateToProps = (state,{match:{params}}) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      params.filter
    )
  }
}

const VisibleToDoList = withRouter(connect(mapStateToProps, {onTodoClick:toggleTodo})(TodoList));
export default VisibleToDoList;