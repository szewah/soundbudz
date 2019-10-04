import axios from "axios";


export default {

    postNewUser: async function(newUser) {
        const data = await axios
            .post('/new/user', newUser);
        return console.log('This is the client side response: ', data);
    },

    createNewGroup: function(newGroup) {
        return axios.post('/new/group', newGroup)
    },

    geUser: function(id){
        return axios.get('/user' + id)
    },

    getGroup: function(id) {
        return axios.get('/groups'+ id)
    } 
};



