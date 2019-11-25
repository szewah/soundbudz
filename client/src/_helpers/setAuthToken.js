// Redux Login Action Set Current User

import axios from 'axios';

const setAuthToken = (token) => {
    console.log('this is the token in setauthtoken ' + token)
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;