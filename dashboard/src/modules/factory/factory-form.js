import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";

export default {
    state: {
        factoryCode: null,
        factoryName: null,
        factoryId: null
    },
    actions: {
        async fetchFactoryById({commit, dispatch}, factoryId) {
            if (factoryId) {
                try {
                    const config = {
                        method: 'get',
                        url: `${ApiConfig.API_BASE_URL}/factory/${factoryId}`,
                        headers: {}
                    };

                    const response = await axios(config);

                    console.log('sdfsdfsdf', response.data.data);
                    if (response.data.data) {
                        commit('UPDATE_FACTORY_NAME', response.data.data.name);
                        commit('UPDATE_FACTORY_CODE', response.data.data.code);
                        commit('UPDATE_FACTORY_ID', response.data.data._id);
                    }
                } catch (error) {
                    dispatch('showError', " Failed fetching the factory to edit.", {root: true});
                }
            } else {
                commit('UPDATE_FACTORY_NAME', null);
                commit('UPDATE_FACTORY_CODE', null);
                commit('UPDATE_FACTORY_ID', null);
            }
        },
        async saveFactory({ state, dispatch}) {
            try {
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/factory/`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        code: state.factoryCode,
                        name: state.factoryCode
                    }
                };

                await axios(config);

                await router.push("/factory");

                dispatch('showInfo', "New factory successfully added", {root: true});
            } catch (error) {
                dispatch('showError', "Failed saving factory in database.", {root: true});
            }
        },
    },
    getters: {
        factoryName: (state) => state.factoryName,
        factoryCode: (state) => state.factoryCode,
    },
    mutations: {
        UPDATE_FACTORY_NAME: (state, factoryName) => {
            state.factoryName = factoryName;
        },
        UPDATE_FACTORY_CODE: (state, factoryCode) => {
            state.factoryCode = factoryCode;
        },
        UPDATE_FACTORY_ID: (state, factoryId) => {
            state.factoryId = factoryId;
        }
    }
}