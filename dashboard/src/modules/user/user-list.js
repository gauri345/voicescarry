import axios from "axios";

import ApiConfig from "@/config/ApiConfig";

export default {
    state: {
        allUsers: [],
        hasError: false,
        errorMessage: "",
        activeToggleRequests: [],
        userDeleteError: false,
        userDeleteSucceed: false,
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

            const config = {
                method: 'delete',
                url: `${ApiConfig.API_BASE_URL}/users/${userId}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            try {
                await axios(config);
                commit('REMOVE_USER_FROM_THE_LIST_BY_ID', userId);
                commit('TOGGLE_DELETE_USER_SUCCEED');
            } catch (error) {
                commit('TOGGLE_DELETE_USER_ERROR');
            }
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
        activeToggleRequests: (state) => state.activeToggleRequests,
        userDeleteError: (state) => state.userDeleteError,
        userDeleteSucceed: (state) => state.userDeleteSucceed
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
        REMOVE_USER_FROM_THE_LIST_BY_ID: (state, userId) => state.allUsers = state.allUsers.filter(user => userId !== user._id),
        TOGGLE_DELETE_USER_ERROR: (state) => state.errorMessageDisplayed = !state.errorMessageDisplayed,
        TOGGLE_DELETE_USER_SUCCEED: (state) => state.userDeleteSucceed = !state.infoMessageDisplayed,
    }
}
