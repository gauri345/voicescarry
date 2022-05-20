import axios from "axios";

export default {
    state: {
        allUsers: [],
        hasError: false,
        errorMessage: ""
    },

    actions: {
        async fetchAllUsers({commit}) {

            const config = {
                method: 'get',
                url: 'http://localhost:4000/api/users/all',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            try {
                const response = await axios(config);
                console.log(response.data);
                commit('UPDATE_ALL_USERS', response.data.data);
            } catch (error) {
                commit('TOGGLE_ERROR', []);
                commit('UPDATE_ERROR_MESSAGE', "Failed loading users from database.");
            }
        }
    },


    getters: {
        allUsers: (state) => state.allUsers,
        hasError: (state) => state.hasError,
        errorMessage: (state) => state.errorMessage
    },

    mutations: {
        UPDATE_ALL_USERS: (state, userList) => state.allUsers = userList,
        TOGGLE_ERROR: (state) => state.hasError = !state.hasError,
        UPDATE_ERROR_MESSAGE: (state, message) => state.errorMessage = message
    }
}