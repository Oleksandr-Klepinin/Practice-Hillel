import { takeEvery } from 'redux-saga/effects'
import { getDataWorker } from './workers/getData'
import { setDataWorker } from './workers/setData.js'
import { getDataAsyncAction, setDataAsyncAction } from './asyncActions'

export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
}