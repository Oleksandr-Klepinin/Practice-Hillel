import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const handleAddTodo = values => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: new Date().getTime(),
                text: values.todo,
                completed: false,
            },
        ]);
    };

    const handleToggleTodo = id => {
        setTodos(todos =>
            todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    const handleDeleteTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                TODO List
            </Typography>

            <TodoForm onSubmit={handleAddTodo} />
            <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </Container>
    );
};

export default App;