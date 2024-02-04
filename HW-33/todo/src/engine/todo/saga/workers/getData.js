import { put } from 'redux-saga/effects';
import slice from '../../redux/slice';

export function* getDataWorker() {
    const data = JSON.parse(localStorage.getItem('items'));
    yield put(slice.actions.setItems(data))
    yield put(slice.actions.setLoading(false))
}