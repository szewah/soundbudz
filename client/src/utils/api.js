import axios from "axios";

export default {
    createGroup: function(groupData) {
        return axios.post("/api/groups/", groupData);
    },
    getAllGroups: function(id) {
        return axios.get(`/api/users/${id}/groups`);
    },
    getOneGroup: function(id) {
        return axios.get("/api/groups/" + id);
    },
    updateGroup: function(id) {
        return axios.put("/api/groups/" + id);
    }
}
