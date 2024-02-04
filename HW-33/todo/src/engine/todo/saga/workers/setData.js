import { put, delay, select } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from '../../redux/selectors';

export function* setDataWorker(action) {
    const { payload } = action;
    payload.preventDefault();
    yield put(slice.actions.setLoading(true))
    yield delay(0);
    yield put(slice.actions.addItem(payload.target.text_input.value))
    yield put(slice.actions.setLoading(false))
    const items = yield select(Selectors.items)
    localStorage.setItem('items', JSON.stringify([...items, payload.target.text_input.value]))
}