import React from 'react';
import {addTodo} from '../action/action.js';
const AddTodo = ({ dispatch }) => {
  let inputRef;
  return (
    <div>
      <input ref={node => {
        inputRef = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(inputRef.value));
        inputRef.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;