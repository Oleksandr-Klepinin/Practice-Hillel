import { put, takeEvery } from 'redux-saga/effects';
import { addTodo, toggleTodo} from '../todosSlice.js';

function* handleAddTodoSaga(action) {
    yield put(addTodo(action.payload));
}

function* handleToggleTodoSaga(action) {
    yield put(toggleTodo(action.payload));
}

function* watchTodosSaga() {
    yield takeEvery('todos/addTodoAsync', handleAddTodoSaga);
    yield takeEvery('todos/toggleTodoAsync', handleToggleTodoSaga);
}

export default watchTodosSaga;