import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../_helpers/setAuthToken";
import {actionTypes} from './actionTypes';

export const registerUser = (newUser, history) => (dispatch) => {
    axios
        .post('/user/new', newUser)
        .then(res => 
            {
            console.log('This is the history in the action file ' + history);
            history.push('/login')
        })
        .catch(err => dispatch({
            type: actionTypes.getErrors,
            payload: err.response.data
        }))
};

export const loginUser = (userData) => (dispatch) => {
    axios
        .post('/user/login', userData)
        .then(res => {
            console.log(res.data);
            const {token} = res.data
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
};

export const setCurrentUser = decoded => {
    return {
        type: actionTypes.setCurrentUser,
        payload: decoded
    };
};

export const logoutUser = (user) => (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser());
}
