// const INITIAL = { memes: [{ top: 'top', bottom: 'bottom', url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }] };
const INITIAL = { todos: [], memes: [] };
function rootReducer(state = INITIAL, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, memes: [...state.memes, action.payload] }
        case 'DELETE':
            return { ...state, memes: state.memes.filter(meme => meme.id !== action.payload) }
        // case 'ADD':
        //     return { ...state, todos: [...state.todos, action.payload] }
        // case 'DELETE':
        //     return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
        default:
            return state;
    }
}

export default rootReducer;