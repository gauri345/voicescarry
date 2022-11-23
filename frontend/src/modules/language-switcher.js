import HttpClient from "@/util/http_client";

export default {
    namespaced: true,
    state: {
        currentLanguage:  localStorage.getItem('language') || 'en',
        languageList: [],
    },
    actions: {
        async fetchAllLanguages({commit}) {
            try {
                const response = await HttpClient.get('language');
                commit('UPDATE_LANGUAGE_LIST', response.data.data);
            } catch (error) {
                console.error(error)
            }
        },
        changeLanguage({commit}, language) {
            localStorage.setItem('language', language)
            commit('UPDATE_CURRENT_LANGUAGE', language);
            location.reload();
        }
    },

    getters: {
        languageList: (state) => state.languageList,
        currentLanguage: (state) => state.currentLanguage
    },

    mutations: {
        UPDATE_CURRENT_LANGUAGE: (state, lang) => state.currentLanguage = lang,
        UPDATE_LANGUAGE_LIST: (state, languageList) => state.languageList = languageList
    }
}