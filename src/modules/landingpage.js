import HttpClient from "@/util/HttpClient";
import router from '@/router'

export default {
    state: {
        factoryCode: '',
        errorMessage: null,
    },

    getters: {
        getErrorMessage: (state) => state.errorMessage
    },

    actions: {
        async submitForm({commit, state}) {
            if (state.factoryCode.length < 5) {
                commit("UPDATE_ERROR_MESSAGE", "Invalid factory code [must contain more than 5 characters.]")
            } else {
                try {
                    await HttpClient.get(`factory/exists?code=${state.factoryCode}`);
                    router.push({name: 'Homepage'});
                } catch (error) {
                    commit("UPDATE_ERROR_MESSAGE", "Failed validating factory code. [Please re-enter a correct factory code.]");
                }
            }
        },
        clearErrorMessage({commit}) {
            commit('UPDATE_ERROR_MESSAGE', null);
        }
    },

    mutations: {
        UPDATE_CODE: (state, code) => state.factoryCode = code,
        UPDATE_ERROR_MESSAGE: (state, message) => state.errorMessage = message
    }
}