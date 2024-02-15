import { createSelector } from 'reselect';

const getAllTodos = state => state.todos.items;
const getTodosFilter = state => state.todos.filter;

export const selectFilteredTodos = createSelector(
    [getAllTodos, getTodosFilter],
    (items, filter) => {
        let filteredItems = [];
        switch (filter) {
            case 'all':
                filteredItems = [...items];
                break;
            case 'active':
                filteredItems = items.filter(todo => !todo.completed);
                break;
            case 'completed':
                filteredItems = items.filter(todo => todo.completed);
                break;
            default:
                filteredItems = [...items];
        }

        return filteredItems.sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1);
    }
);