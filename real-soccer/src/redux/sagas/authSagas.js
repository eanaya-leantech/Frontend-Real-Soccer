import {put, call, takeEvery} from 'redux-saga/effects'
import API from '../../API'
import {signIn, setSuccess, setLoading, setError} from '../../redux/actions/authActions'
import {saveStorage} from '../../tools/storage'
/**
 * Sagas for auth proccess
 */


function * asyncSignIn({payload}){
    const {credentials, redirect}=payload
    try{
        yield put(setLoading(true))
        const {status,data} = yield call(API.authService.auth,credentials )
        if(status===200){
            yield put(setSuccess(data))
            saveStorage(data)
            redirect.push('/')
        }
        
    }catch(err){
        yield put(setError(err))
        yield put(setLoading(false))
    }
    
}

export default function* authSagas(){
    yield takeEvery('SIGN_IN_USER', asyncSignIn)
}