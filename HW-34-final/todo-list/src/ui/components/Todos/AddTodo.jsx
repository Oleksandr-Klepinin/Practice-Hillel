import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, Stack } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AddTodo({ onAddTodo }) {
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        onAddTodo(input);
        setInput('');
    };

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <TextField
                label="Add new task"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                fullWidth
                margin="normal"
            />
            <IconButton onClick={handleAddTodo} color="primary" aria-label="add">
                <AddCircleOutlineIcon />
            </IconButton>
        </Stack>
    );
}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;