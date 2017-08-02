import React from 'react';
import {default as AddTodo} from '../container/addtodo.container.js';
import {default as VisibleToDoList} from '../container/todolist.container.js';
import {default as Footer} from './footer.component.js';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleToDoList />
    <Footer />
  </div>
);

export default TodoApp;