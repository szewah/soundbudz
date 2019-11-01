import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const initState = {};
const middleware = [thunk]

//Pass reducer function to store
const store = createStore(
    rootReducer,
    initState,
    compose(
    //(...)spread operator creates a copy of the middleware array
    applyMiddleware(...middleware),
    //the following allows us to use redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
);

export default store;