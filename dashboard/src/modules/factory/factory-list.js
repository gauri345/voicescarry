import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    state: {
        factoryList: [],
    },

    actions: {
        async fetchAllFactories({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/factory`,
                headers: {}
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_FACTORIES', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed fetching factories.", {root: true});
            }
        },
    },
    getters: {
        allFactories: (state) => state.factoryList,
    },
    mutations: {
        UPDATE_ALL_FACTORIES: (state, factoryList) => state.factoryList = factoryList,
    }
}