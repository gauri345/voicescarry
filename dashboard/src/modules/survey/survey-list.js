import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    state: {
        surveyList: [],
        surveyedFactories: [],
    },
    actions: {
        async fetchAllSurveys({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/surveys`,
                headers: {}
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_SURVEYS', response.data.data);
                commit('UPDATE_SURVEYED_FACTORIES', response.data.data.map(survey => survey.factory));
            } catch (error) {
                dispatch('showError', " Failed deleting the User.", {root: true});
            }
        },
        async filterSurveys({commit, state, dispatch}) {

            const config = {
                method: 'post',
                url: `${ApiConfig.API_BASE_URL}/surveys/answers/filtered`,
                headers: {},
                data: {
                    factoryId: state.filteredFactoryCode
                }
            };

            try {
                const response = await axios(config);
                console.log(response.data.data)
                commit('UPDATE_ALL_SURVEYS', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed fetching surveys Please try again.", {root: true});
            }
        },

        resetFilters({ dispatch, commit}) {
            dispatch('fetchAllSurveys');
            commit('UPDATE_FILTERED_FACTORY_CODE', '');
        },

        async downloadFilteredSurveyAnswers({state}) {
            window.location.href = `${ApiConfig.API_BASE_URL}/surveys/download/answers/filtered/from=${state.dateFrom}&to=${state.dateTo}`;
        }
    },
    mutations: {
        UPDATE_ALL_SURVEYS: (state, surveyList) => state.surveyList = surveyList,
        UPDATE_FILTERED_FACTORY_CODE: (state, factoryCode) => state.filteredFactoryCode = factoryCode,
        UPDATE_SURVEYED_FACTORIES: (state, factories) => state.surveyedFactories = factories
    },
    getters: {
        allSurveys: (state) => state.surveyList,
        surveyedFactories: (state) => state.surveyedFactories,
    }
}
