import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (
        <List>
            {todos.map(todo => (
                <ListItem key={todo.id} dense button>
                    <Checkbox checked={todo.completed} onClick={() => onToggle(todo.id)} />
                    <ListItemText primary={todo.text} />
                    <IconButton onClick={() => onDelete(todo.id)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;