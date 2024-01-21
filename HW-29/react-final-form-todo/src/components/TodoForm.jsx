import { Form, Field } from 'react-final-form';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

const validate = values => {
    const errors = {};
    if (!values.todo || values.todo.length < 5) {
        errors.todo = 'The minimum field length is 5 characters';
    }
    return errors;
};

const TodoForm = ({ onSubmit }) => {
    const handleSubmit = async (values, form) => {
        await onSubmit(values);
        form.reset();
    };

    return (
        <Form
            onSubmit={(values, form) => handleSubmit(values, form)}
            validate={validate}
            render={({ handleSubmit, submitting, pristine, errors }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="todo">
                        {({ input, meta }) => (
                            <div>
                                <TextField
                                    label="Task"
                                    variant="outlined"
                                    error={!!(meta.touched && meta.error)}
                                    helperText={meta.touched && meta.error ? meta.error : ''}
                                    {...input}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        )}
                    </Field>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={submitting || pristine || !!errors.todo}
                        style={{ marginTop: '10px' }}
                    >
                        Add
                    </Button>
                </form>
            )}
        />
    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;