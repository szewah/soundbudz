import axios from 'axios';
import API from '../utils/api';
import {actionTypes} from './actionTypes';


export const createEventGroup = event => dispatch => {
    console.log("[DEBUG] inside createEventGroup");
    dispatch({
        type: actionTypes.createEventGroupPending,
        payload: 'Pending'
    });
    axios
    .post("/api/groups/", event)
    .then(res => {
        console.log("This is in groupAction file", event);
        console.log('[DEBUG] createEventGroupSucess');
        dispatch({
            type: actionTypes.createEventGroupSuccess,
            payload: event
        })

    })
    .catch(err => dispatch({
        type: actionTypes.createEventGroupFailure,
        payload: err.response.data
    })
    );
};