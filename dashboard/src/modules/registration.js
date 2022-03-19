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
                const response = await axios(config);
                console.log(response)
                await router.push('registerForm');
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
