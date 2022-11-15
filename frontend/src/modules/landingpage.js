import HttpClient from "@/util/http_client";
import router from '@/router'
import LocalStorage from "@/util/local_storage";
import ApiConfig from "@/config/AppConfig";

export default {
    state: {
        factoryCode: '',
        errorMessage: null,
    },

    getters: {
        getErrorMessage: (state) => state.error
    },

    actions: {
        async submitForm({commit, state}) {
            if (state.factoryCode.length <= 0) {
                commit("UPDATE_ERROR_MESSAGE", "Invalid factory code [must contain more than 5 characters.]")
            } else {
                try {
                    const response = await HttpClient.get(`survey/start/${state.factoryCode}`);

                    const survey = response.data.data;

                    LocalStorage.set("survey", survey, ApiConfig.SURVEY_SESSION_TTL_SECONDS);

                    commit('UPDATE_SURVEY', survey, {root: true});

                    await router.push({name: 'HomePage'});
                } catch (error) {
                    commit("UPDATE_ERROR_MESSAGE", "Provided factory code not found. [Please re-enter a correct factory code.]");
                }
            }
        },
        clearErrorMessage({commit}) {
            commit('UPDATE_ERROR_MESSAGE', null);
        }
    },

    mutations: {
        UPDATE_CODE: (state, code) => state.factoryCode = code,
        UPDATE_ERROR_MESSAGE: (state, message) => state.error = message
    }
}
