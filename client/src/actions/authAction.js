import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../_helpers/setAuthToken";
import {actionTypes} from './actionTypes';

export const registerUser = (newUser, history) => (dispatch) => {
    axios
        .post('/user/new', newUser)
        .then(res => history.push('/login'))
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
            localStorage.setItem('cool-jwt', token);
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

