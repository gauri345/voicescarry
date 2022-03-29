const axios = require('axios');
import router from '../../routes';

export default {
    state: {
        userRegistrationErrorMessage: ''
    },
    mutations: {
        UPDATE_ERROR_MESSAGE: function (state, message) {
            state.userRegistrationErrorMessage = message;
        }
    },
    actions: {
        async registerAction({commit}, payload) {

            const data = JSON.stringify(payload);

            const config = {
                method: 'post',
                url: 'http://localhost:4000/api/registration',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            try {
                await axios(config);
                await router.push({name:'userRegistrationSuccess'});
            } catch (error) {
                console.log(error.response)
                commit('UPDATE_ERROR_MESSAGE', error.response.data.message);
            }
        },
        clearErrorMessage({commit}) {
            commit('UPDATE_ERROR_MESSAGE', "");

        },
    },
    getters: {
        userRegistrationErrorMessage: function (state) {
            return state.userRegistrationErrorMessage;
        }
    }
};