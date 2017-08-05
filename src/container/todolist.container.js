import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getVisibleTodos} from '../reducer/root.reducer.js';
import {default as TodoList} from '../component/todolist.component.js';
import {toggleTodo} from '../action/action.js';

//take the props that depends upon state obj or store.
const mapStateToProps = (state,{match:{params:{filter='all'}}}) => {
  return {
    todos: getVisibleTodos(
      state,
      filter
    )
  }
}

const VisibleToDoList = withRouter(connect(mapStateToProps, {onTodoClick:toggleTodo})(TodoList));
export default VisibleToDoList;