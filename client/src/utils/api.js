import axios from "axios";


export default {

    postNewUser: function(newUser) {
        return axios.post('/api/new/user', newUser);
    },

    createNewGroup: function(newGroup) {
        return axios.post('/api/new/group', newGroup)
    },

    geUser: function(id){
        return axios.get('/api/user' + id)
    },

    getGroup: function(id) {
        return axios.get('/api/groups'+ id)
    } 
};



