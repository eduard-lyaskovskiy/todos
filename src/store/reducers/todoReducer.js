const initState = {
    todos: [
        { id: '1', title: 'Todo one', content: 'make 1 thing' },
        { id: '2', title: 'Todo two', content: 'make 3 things' },
        { id: '3', title: 'Todo three', content: 'make 2 things' }
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATED_TODO':
            console.log('created todo', action.todo);
            return state;
        case 'CREATED_TODO_ERROR':
            console.log('created todo with error', action.err);
            return state;
        default:
            return state;
    }
}

export default todoReducer