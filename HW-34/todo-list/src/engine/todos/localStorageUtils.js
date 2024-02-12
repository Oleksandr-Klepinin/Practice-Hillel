export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('todosState');
        if (serializedState === null) {
            return {
                items: [],
                filter: 'all',
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            items: [],
            filter: 'all',
        };
    }
};

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todosState', serializedState);
    } catch {
        // Handle errors
    }
};