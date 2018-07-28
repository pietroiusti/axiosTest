// users.js
const axios = require('axios');

class Users {
    static all() {
        return axios.get('./users.json').then(resp => resp.data);
    }
}

const getUsers = (orgId) => {
    return axios.get(`/users/${orgId}`).then(resp.data);
};

export { Users, getUsers };
