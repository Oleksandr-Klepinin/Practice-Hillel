import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodoById, deleteAllTodos, deleteTodo } from '../../../core/data/todosSlice.js';
import { selectFilteredTodos } from '../../../core/data/todosSelectors.js';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import SearchTodo from './SearchTodo.jsx';
import Filter from './Filter.jsx';
import { Stack, Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

function Todos() {
    const [search, setSearch] = useState('');
    const todos = useSelector(selectFilteredTodos);
    const dispatch = useDispatch();

    const handleAddTodo = (newTodo) => {
        if (!newTodo.trim()) return;
        dispatch(addTodo(newTodo.trim()));
    };

    const handleDeleteCompleted = () => {
        dispatch(deleteTodo());
    };

    const handleDeleteAll = () => {
        dispatch(deleteAllTodos());
    };

    const filteredTodos = search.length > 0
        ? todos.filter(todo => todo.text.toLowerCase().startsWith(search.toLowerCase()))
        : todos;

    return (
        <Stack spacing={2}>
            <AddTodo onAddTodo={handleAddTodo} />
            <TodoList todos={filteredTodos} onToggleTodo={(id) => dispatch(toggleTodo(id))} onDeleteTodo={(id) => dispatch(deleteTodoById(id))} />
            <SearchTodo search={search} setSearch={setSearch} />
            <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">Count: {filteredTodos.length}</Typography>
                <Stack direction="row" spacing={1}>
                    <Button onClick={handleDeleteCompleted} variant="outlined" color="secondary" startIcon={<DeleteSweepIcon />}>
                        DELETE COMPLETED
                    </Button>
                    <Button onClick={handleDeleteAll} variant="outlined" color="error" startIcon={<DeleteForeverIcon />}>
                        DELETE ALL
                    </Button>
                </Stack>
            </Stack>
            <Filter />
        </Stack>
    );
}

export default Todos;