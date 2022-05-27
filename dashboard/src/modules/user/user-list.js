import axios from "axios";

export default {
    state: {
        allUsers: [],
        hasError: false,
        errorMessage: "",
        loadingActivateUser: false
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
                commit('UPDATE_ALL_USERS', response.data.data);
            } catch (error) {
                commit('TOGGLE_ERROR', []);
                commit('UPDATE_ERROR_MESSAGE', "Failed loading users from database.");
            }
        },

        async toggleUserStatus({commit}, user) {
            commit('TOGGLE_LOADING_ACTIVATE_USER');

            const config = {
                method: 'post',
                url: `http://localhost:4000/api/users/status/${user._id}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "status": user.isActive ? "inactive" : "active"
                }
            };

            try {
                await axios(config);
                user.isActive = !user.isActive;
                commit('UPDATE_SINGLE_USER', user);
            } catch (error) {
                commit('TOGGLE_ERROR', []);
                commit('UPDATE_ERROR_MESSAGE', "Failed activating user. Please try again.");
            }

            commit('TOGGLE_LOADING_ACTIVATE_USER');
        }
    },

    getters: {
        allUsers: (state) => state.allUsers,
        hasError: (state) => state.hasError,
        errorMessage: (state) => state.errorMessage,
        loadingActivateUser: (state) => state.loadingActivateUser
    },

    mutations: {
        UPDATE_ALL_USERS: (state, userList) => state.allUsers = userList,
        TOGGLE_ERROR: (state) => state.hasError = !state.hasError,
        UPDATE_ERROR_MESSAGE: (state, message) => state.errorMessage = message,
        TOGGLE_LOADING_ACTIVATE_USER: (state) => state.loadingActivateUser = !state.loadingActivateUser,
        UPDATE_SINGLE_USER: (state, userToUpdate) => {
            const index = state.allUsers.findIndex((user => user._id === userToUpdate._id));
            state.allUsers[index] = userToUpdate;
        }
    }
}
