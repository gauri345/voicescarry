import ApiConfig from "@/config/ApiConfig";
import axios from "axios";

export default {
    namespaced: true,
    state: {
        translation: {
            key: 'key',
            isActive: true,
            items: [
                {
                    lang: 'en',
                    content: ""
                }
            ]
        },
    },
    actions: {
        async fetchTranslationById({commit, dispatch}, translationId) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/translation/${translationId}`,
                    headers: {}
                };
                const response = await axios(config);

                if (response.data.data) {
                    commit('UPDATE_TRANSLATION', response.data.data);
                }
            } catch (error) {
                console.log('error', error)
                dispatch('showError', " Failed fetching the translation to edit.", {root: true});
            }

        },
    },

    getters : {
        translations: (state) => state.translation
    },
    mutations: {
        UPDATE_TRANSLATION: (state, translation) => {
            state.translation.key = translation.key
            translation.items.forEach(item => state.translation.items.push(item));
        },
        UPDATE_TRANSLATION_KEY: (state, key) => state.key = key,
        UPDATE_STATUS: (state, status) => state.isActive = status
    }
}