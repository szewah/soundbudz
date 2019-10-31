import {createStore, applyMiddleware} from 'redux';
import authReducer from '../reducers/authReducer'
import thunkMiddleWear from 'redux-thunk';
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger();
//Pass reducer function to store
const store = createStore(
    authReducer,
    applyMiddleware(
        thunkMiddleWear,
        loggerMiddleware
    )
);

export default store;