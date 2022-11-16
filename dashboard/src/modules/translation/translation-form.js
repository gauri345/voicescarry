import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";

export default {
    namespaced: true,
    state: {
        translation: {
            id: null,
            key: 'key',
            isActive: true,
            items: []
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
        async saveTranslation({dispatch, state}) {
            try {
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/translation`,
                    data: state.translation
                };
                await axios(config);
                await router.push("/translation");

                dispatch('showInfo', "Translation successfully updated", {root: true});
            }catch (error) {
                console.log('error', error);
                dispatch('showError', " Failed updating the translation.", {root: true});
            }
        }
    },

    getters: {
        translations: (state) => state.translation,
    },
    mutations: {
        UPDATE_TRANSLATION: (state, translation) => {
            state.translation.key = translation.key;
            state.translation.isActive = translation.isActive;
            state.translation.id = translation._id;

            translation.items.forEach(item => {
                if (!state.translation.items.map(item => item.lang).includes(item.lang)) {
                    state.translation.items.push(item)
                }
            });
        },
        UPDATE_TRANSLATION_KEY: (state, key) => state.key = key,
        UPDATE_STATUS: (state, status) => state.translation.isActive = status
    }
}