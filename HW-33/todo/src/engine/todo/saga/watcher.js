import { takeEvery, select, put } from 'redux-saga/effects';
import { getDataWorker } from './workers/getData';
import { setDataWorker } from './workers/setData.js';
import { getDataAsyncAction, setDataAsyncAction } from './asyncActions';
import { deleteItemAsyncAction } from './asyncActions';
import slice from '../redux/slice';
export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, function*(action) {
        const state = yield select();
        yield setDataWorker(action, state);
    });
    yield takeEvery(deleteItemAsyncAction.type, deleteItemWorker);
}

function* deleteItemWorker(action) {
    const { payload } = action;
    const items = yield select(state => state.todo.items);
    const updatedItems = items.filter(item => item !== payload);
    yield put(slice.actions.setItems(updatedItems));
    localStorage.setItem('items', JSON.stringify(updatedItems));
}