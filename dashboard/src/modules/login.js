const axios = require('axios');
import router from '../routes';

export default {
    state: {
        errorMessage: ''
    },
    mutations: {
        UPDATE_ERROR_MESSAGE: function (state, message) {
            state.errorMessage = message;
        }
    },
    actions: {
        async loginAction({commit}, payload) {

            const data = JSON.stringify(payload);

            const config = {
                method: 'post',
                url: 'http://localhost:4000/api/security/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            try {
                const response = await axios(config);
                console.log(response)
                await router.push({name: 'userRegistration'});
            } catch (error) {
                commit('UPDATE_ERROR_MESSAGE', error.response.data.message);
            }
        },
        clearErrorMessage({commit}) {
            commit('UPDATE_ERROR_MESSAGE', "");
        }
    },
    getters: {
        errorMessage: function (state) {
            return state.errorMessage;
        }
    }
};
