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
        loginAction({commit}) {
            commit('UPDATE_ERROR_MESSAGE',  "invalid user");
        },
        disableErrorMessage({commit}){
           commit('UPDATE_ERROR_MESSAGE', "");
        }
    },
    getters: {
        errorMessage: function (state) {
            return state.errorMessage;
        }
    }
};
