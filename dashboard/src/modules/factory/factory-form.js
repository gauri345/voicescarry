import ApiConfig from "@/config/ApiConfig";
import axios from "axios";

export default {
    state: {
        factoryCode: '',
        factoryName: ''
    },
    actions: {
        async fetchFactoryById({commit, dispatch}, factoryId) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/factory/${factoryId}`,
                    headers: {}
                };

                const response = await axios(config);


                commit('UPDATE_FACTORY_NAME', response.data.data.name);
                commit('UPDATE_FACTORY_CODE', response.data.data.code);
            } catch (error) {
                dispatch('showError', " Failed deleting the factory to edit.", {root: true});
            }
        },
        updateFactoryName({commit}, factoryName) {
            commit('UPDATE_FACTORY_NAME', factoryName);
        },
        updateFactoryCode({commit}, factoryCode) {
            commit('UPDATE_FACTORY_CODE', factoryCode);
        },

    },
    getters: {
        factoryName: (state) => state.factoryName,
        factoryCode: (state) => state.factoryCode
    },
    mutations: {
        UPDATE_FACTORY_NAME: (state, factoryName) => {
            state.factoryName = factoryName;
        },
        UPDATE_FACTORY_CODE: (state, factoryCode) => {
            state.factoryCode = factoryCode;
        }
    }
}