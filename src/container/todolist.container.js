import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getVisibleTodos} from '../reducer/root.reducer.js';
import {default as TodoList} from '../component/todolist.component.js';
import * as actions from '../action/action.js';

//take the props that depends upon state obj or store.
const mapStateToProps = (state,{match:{params:{filter='all'}}}) => {
	return {
		todos: getVisibleTodos(
			state,
			filter
		),
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
		const {filter,fetchTodos} = this.props;
		fetchTodos(filter);
	}
	render(){
		const {toggleTodo,...rest} = this.props;
		return <TodoList {...rest} onTodoClick = {toggleTodo}/>
	}
}
VisibleToDoList = withRouter(connect(mapStateToProps, actions)(VisibleToDoList));
export default VisibleToDoList;