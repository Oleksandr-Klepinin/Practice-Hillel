import { put, delay } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from '../../redux/selectors';

export function* setDataWorker(action, state) {
    const { payload } = action;
    payload.preventDefault();
    yield put(slice.actions.setLoading(true));
    yield delay(0);
    const items = Selectors.items(state);
    const newItem = payload.target.text_input.value;
    yield put(slice.actions.addItem(newItem));
    localStorage.setItem('items', JSON.stringify([...items, newItem]));
    yield put(slice.actions.setLoading(false));
}