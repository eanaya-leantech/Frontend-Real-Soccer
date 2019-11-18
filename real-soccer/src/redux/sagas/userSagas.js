import {delay} from 'redux-saga'
import {put, call, takeEvery} from 'redux-saga/effects'

/**
 * 
 */



function * testSaga(){
    yield put({type: 'SAVE', user: {nickname: 'user test', mail: 'tets@tets.com', urlAvatar:'http://someurls.com/173719'}})
}

export default function* userSagas(){
    yield takeEvery('SAVE_DATA', testSaga)
}