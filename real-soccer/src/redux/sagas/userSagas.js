import {takeEvery} from 'redux-saga/effects'

/**
 *
 */


function * testWorker(){
}

export default function* userSagas(){
    yield takeEvery('SAVE_DATA', testWorker)
}