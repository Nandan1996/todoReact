import {connect} from 'react-redux';

import {default as NewTodo} from '../component/addtodo.component.js';

const AddTodo = connect()(NewTodo);
export default AddTodo;