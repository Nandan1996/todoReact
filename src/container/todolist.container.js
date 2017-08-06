import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getVisibleTodos,getIsFetching} from '../reducer/root.reducer.js';
import {default as TodoList} from '../component/todolist.component.js';
import * as actions from '../action/action.js';

//take the props that depends upon state obj or store.
const mapStateToProps = (state,{match:{params:{filter='all'}}}) => {
	return {
		todos: getVisibleTodos(
			state,
			filter
		),
		isFetching: getIsFetching(state,filter),
		filter
	}
}
class VisibleToDoList extends React.Component{
	componentDidMount(){
		this.fetchData();
	}
	componentDidUpdate(prevProps){
		if(this.props.filter !== prevProps.filter){
			this.fetchData();
		}
	}
	fetchData(){
		const {filter,fetchTodos,requestTodos} = this.props;
		requestTodos(filter);
		fetchTodos(filter);
	}
	render(){
		const {toggleTodo,todos,isFetching} = this.props;
		if(isFetching && !todos.length){
			return <p>Loading...</p>;
		}
		return <TodoList todos = {todos} onTodoClick = {toggleTodo}/>
	}
}
VisibleToDoList = withRouter(connect(mapStateToProps, actions)(VisibleToDoList));
export default VisibleToDoList;