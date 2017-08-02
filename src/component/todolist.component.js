import React from 'react';

import Todo from './todo.component.js';
const TodoList = ({todos,onTodoClick}) => {
    return (
        <ul>
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