import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const middleWares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const {logger} = require(`redux-logger`);
    middleWares.push(logger);
}

export default createStore(rootReducer,
    applyMiddleware(...middleWares))
