import PropTypes from 'prop-types';
import { List } from '@mui/material';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <List>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </List>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })).isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;