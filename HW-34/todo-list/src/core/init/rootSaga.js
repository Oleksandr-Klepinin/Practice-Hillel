import { all } from 'redux-saga/effects';
import watchTodosSaga from '../data/sagas/todosSagas';

export default function* rootSaga() {
    yield all([
        watchTodosSaga(),
    ]);
}