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
        async deleteTranslation({commit, state, dispatch}, translationId) {
            const config = {
                method: 'delete',
                url: `${ApiConfig.API_BASE_URL}/translation/${translationId}`
            };

            try {
                const response = await axios(config);
                if (response.status === 200) {
                    const newTranslationList = state.translations.filter(translation => translation._id !== translationId);
                    dispatch('showInfo', "Translation successfully deleted.", {root: true});
                    commit('UPDATE_ALL_TRANSLATIONS', newTranslationList);
                }
                if (response.status === 404) {
                    dispatch('showError', "Failed deleting translation.", {root: true});
                }
            } catch (error) {
                console.log(error);
                dispatch('showError', "Failed deleting translation.", {root: true});
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
