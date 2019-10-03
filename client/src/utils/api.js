import axios from "axios";


export default {

    postNewUser: async function(newUser) {
        const data = await axios
            .post('/api/new/user', newUser);
        return console.log(data);
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



