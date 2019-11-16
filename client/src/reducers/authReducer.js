import {actionTypes} from '../actions/actionTypes';
//set state
const initState = {
    isAuthenticated: false,
    user: {},
};

//the Reducer function takes a state and then an action
const authReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.setCurrentUser:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        default:
            return state
    };
};

export default authReducer;