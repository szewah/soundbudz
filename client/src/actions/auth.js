import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../_helpers/setAuthToken";
import {SET_CURRENT_USER} from './types';

export const loginUser = (userData) => (dispatch) => {
    axios
        .post('/user/login', loginUser)
        .then(res => {
            const {token} = res.data
            localStorage.setItem('cool-jwt', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

