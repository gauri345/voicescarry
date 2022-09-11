import HttpClient from "@/util/http_client";

export default {
    state: {
        languageList: [],
    },
    actions: {
        async fetchAllLanguages({commit}) {
            try {
                const response = await HttpClient.get( 'language');
                commit('UPDATE_LANGUAGE_LIST', response.data.data);
            } catch (error) {
               console.error(error)
            }
        }
    },

    getters: {
        languageList: (state) => state.languageList
    },

    mutations: {
        UPDATE_LANGUAGE_LIST: (state, languageList) => state.languageList = languageList
    }
}