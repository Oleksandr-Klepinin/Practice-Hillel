import PropTypes from 'prop-types';
import { ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
    return (
        <ListItem dense>
            <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                onClick={(e) => e.stopPropagation()}
                onChange={() => onToggleTodo(todo.id)}
            />
            <ListItemText primary={todo.text} />
            <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTodo(todo.id)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;