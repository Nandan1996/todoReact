import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getVisibleTodos,getIsFetching,getErrorMessage} from '../reducer/root.reducer.js';
import {default as TodoList} from '../component/todolist.component.js';
import FetchError from '../component/fetcherror.component.js';
import * as actions from '../action/action.js';

//take the props that depends upon state obj or store.
const mapStateToProps = (state,{match:{params:{filter='all'}}}) => {
	return {
		todos: getVisibleTodos(
			state,
			filter
		),
		isFetching: getIsFetching(state,filter),
		errorMessage:getErrorMessage(state,filter),
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
		fetchTodos(filter).then(() => console.log("done!"));
	}
	render(){
		const {toggleTodo,todos,isFetching,errorMessage} = this.props;
		if(isFetching && !todos.length){
			return <p>Loading...</p>;
		}
		if(errorMessage && !todos.length){
			return (<FetchError 
						message = {errorMessage}
						onRetry = {() => this.fetchData()}
					/>);
		}
		return <TodoList todos = {todos} onTodoClick = {toggleTodo}/>
	}
}
VisibleToDoList = withRouter(connect(mapStateToProps, actions)(VisibleToDoList));
export default VisibleToDoList;