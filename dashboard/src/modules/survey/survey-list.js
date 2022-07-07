import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    state: {
        surveyList: [],
        dateFrom: null,
        dateTo: null
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
            } catch (error) {
                dispatch('showError', " Failed deleting the User.", {root: true});
            }
        },
        async filterSurveys({commit, state, dispatch}) {
            console.log(state)
            const config = {
                method: 'post',
                url: `${ApiConfig.API_BASE_URL}/surveys/filterByDate`,
                headers: {},
                data: {
                    dateFrom: state.dateFrom,
                    dateTo: state.dateTo
                }
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_SURVEYS', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed fetching surveys Please try again.", {root: true});
            }
        },

        resetFilters({state, dispatch, commit}) {
            state.dateFrom = null;
            state.dateTo = null;
            commit('RESET_DATE_FROM');
            commit('RESET_TO_FROM');
            dispatch('fetchAllSurveys');
        }
    },
    mutations: {
        UPDATE_ALL_SURVEYS: (state, surveyList) => state.surveyList = surveyList,
        RESET_DATE_FROM: (state) => state.dateFrom = '',
        RESET_TO_FROM: (state) => state.dateFrom = '',
    },
    getters: {
        allSurveys: (state) => state.surveyList,
    }
}
