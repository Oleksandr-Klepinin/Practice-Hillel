import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            todo: '',
        },
        validate: values => {
            const errors = {};
            if (!values.todo || values.todo.length < 5) {
                errors.todo = 'The minimum field length is 5 characters';
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                label="Task"
                variant="outlined"
                error={!!(formik.touched.todo && formik.errors.todo)}
                helperText={formik.touched.todo && formik.errors.todo ? formik.errors.todo : ''}
                {...formik.getFieldProps('todo')}
                style={{ width: '100%' }}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting || !!formik.errors.todo}
                style={{ marginTop: '10px' }}
            >
                Add
            </Button>
        </form>
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;