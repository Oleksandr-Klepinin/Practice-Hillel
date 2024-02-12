import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorageUtils';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: loadFromLocalStorage(),
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ id: Date.now(), text: action.payload, completed: false });
            saveToLocalStorage(state);
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
            saveToLocalStorage(state);
        },
        deleteTodo: (state) => {
            state.items = state.items.filter(todo => !todo.completed);
            saveToLocalStorage(state);
        },
        deleteTodoById: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
            saveToLocalStorage(state);
        },
        deleteAllTodos: (state) => {
            state.items = [];
            saveToLocalStorage(state);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
            saveToLocalStorage(state);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, deleteAllTodos, deleteTodoById, setFilter } = todosSlice.actions;

export default todosSlice.reducer;