import {all} from 'redux-saga/effects'
/**
 * import all the sagas that you need in this file
 */

import UserSagas from './userSagas'

function * rootSaga () {
    yield all([UserSagas(),])
}

export default rootSaga