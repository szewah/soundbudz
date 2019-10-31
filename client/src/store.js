import {createStore} from 'redux';
import authReducer from './reducers/authReducer'

//Pass reducer function to store
const store = createStore(authReducer);

export default store;