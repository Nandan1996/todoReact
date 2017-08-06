import {v4} from 'node-uuid';

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'hey',
        completed: true
    },{
        id: v4(),
        text: 'haa',
        completed: false
    },{
        id: v4(),
        text: "let's go",
        completed: true
    }]
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve,ms));
}

export const fetchTodos = (filter) => {
    return delay(5000).then(() => {
        switch (filter){
            case 'all':
                return fakeDatabase.todos;
            case 'completed':
                return fakeDatabase.todos.filter(t => t.completed);
            case 'active':
                return fakeDatabase.todos.filter(t => !t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    })
}