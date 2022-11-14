import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    namespaced: true,
    state: {
        translations: [],
    },
    actions: {
        async fetchAllTranslations({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/translation`,
                headers: {}
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_TRANSLATIONS', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed fetching translations.", {root: true});
            }
        },
    },
    getters: {
        translations: (state) => state.translations,
    },
    mutations: {
        UPDATE_ALL_TRANSLATIONS: (state, translations) => state.translations = translations,
    }
}
