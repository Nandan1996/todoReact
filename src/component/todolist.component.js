import React from 'react';

import Todo from './todo.component.js';
const TodoList = ({todos,onTodoClick}) => {
    return (
        <ul style={{width:'200px'}}>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
    );
}

export default TodoList;