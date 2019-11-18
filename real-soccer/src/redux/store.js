import { createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers"
import rootSagas from "./sagas"


const sagaMiddleware = createSagaMiddleware(); 

const middleWares = [sagaMiddleware];

const withComponse =  process.env.NODE_ENV === `development` ? composeWithDevTools : compose

const store = createStore(rootReducer, 
    withComponse(applyMiddleware(...middleWares)))

sagaMiddleware.run(rootSagas);

export default store
