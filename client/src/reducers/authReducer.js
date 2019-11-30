import {actionTypes} from '../actions/actionTypes';
import isEmpty from "../validation/is-empty.js";

//set state
const initState = {
    isAuthenticated: false,
    user: {},
};

//the Reducer function takes a state and then an action
const authReducer = (state = initState, action) => {
    console.log('This is action payload ' + JSON.stringify(action));
    switch(action.type) {
        case actionTypes.setCurrentUser:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state
    };
};

export default authReducer;