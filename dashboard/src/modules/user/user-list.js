import axios from "axios";

import ApiConfig from "@/config/ApiConfig";

export default {
    state: {
        allUsers: [],
        hasError: false,
        errorMessage: "",
        activeToggleRequests: []
    },

    actions: {
        async fetchAllUsers({commit}) {

            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/users/all`
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_USERS', response.data.data);
            } catch (error) {
                commit('TOGGLE_ERROR', []);
                commit('UPDATE_ERROR_MESSAGE', "Failed loading users from database.");
            }
        },

        async deleteUser({commit}, userId) {
                console.log('user to delete', userId);

                commit('');
        },

        async toggleUserStatus({commit}, user) {
            commit('ADD_USER_ID_TO_ACTIVE_TOGGLE_REQUEST', user._id);

            const config = {
                method: 'post',
                url: `${ApiConfig.API_BASE_URL}/users/status/${user._id}`,
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
                commit('REMOVE_USER_ID_FROM_ACTIVE_TOGGLE_REQUEST', user._id);
            } catch (error) {
                commit('TOGGLE_ERROR', []);
                commit('UPDATE_ERROR_MESSAGE', "Failed activating user. Please try again.");
            }
        }
    },

    getters: {
        allUsers: (state) => state.allUsers,
        hasError: (state) => state.hasError,
        errorMessage: (state) => state.errorMessage,
        activeToggleRequests: (state) => state.activeToggleRequests
    },

    mutations: {
        UPDATE_ALL_USERS: (state, userList) => state.allUsers = userList,
        TOGGLE_ERROR: (state) => state.hasError = !state.hasError,
        UPDATE_ERROR_MESSAGE: (state, message) => state.errorMessage = message,
        UPDATE_SINGLE_USER: (state, userToUpdate) => {
            const index = state.allUsers.findIndex((user => user._id === userToUpdate._id));
            state.allUsers[index] = userToUpdate;
        },
        ADD_USER_ID_TO_ACTIVE_TOGGLE_REQUEST: (state, userId) => state.activeToggleRequests.push(userId),
        REMOVE_USER_ID_FROM_ACTIVE_TOGGLE_REQUEST: (state, userId) => state.activeToggleRequests = state.activeToggleRequests.filter(id => userId !== id),
    }
}
