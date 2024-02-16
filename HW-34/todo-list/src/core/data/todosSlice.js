import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filter: 'all',
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state) => {
            state.items = state.items.filter(todo => !todo.completed);
        },
        deleteTodoById: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        deleteAllTodos: (state) => {
            state.items = [];
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, deleteAllTodos, deleteTodoById, setFilter } = todosSlice.actions;

export default todosSlice.reducer;