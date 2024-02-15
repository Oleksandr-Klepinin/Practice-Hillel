import { useDispatch } from 'react-redux';
import { setFilter } from '../../../core/data/todosSlice.js';
import { ButtonGroup, Button } from '@mui/material';

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => dispatch(setFilter('all'))}>All</Button>
            <Button onClick={() => dispatch(setFilter('active'))}>Active</Button>
            <Button onClick={() => dispatch(setFilter('completed'))}>Completed</Button>
        </ButtonGroup>
    );
};

export default Filter;