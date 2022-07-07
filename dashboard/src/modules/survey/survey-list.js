import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    state: {
        surveyList: []
    },
    actions: {
        async fetchAllSurveys({commit}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/surveys`,
                headers: {}
            };

            try {
                const response = await axios(config);

                commit('UPDATE_ALL_SURVEYS', response.data.data);
            } catch (error) {
                commit('TOGGLE_SERVER_MESSAGE');
                console.log("Failed fetching surveys.", error);
            }
        }
    },
    mutations: {
        UPDATE_ALL_SURVEYS: (state, surveyList) => state.surveyList = surveyList,
    },
    getters: {
        allSurveys: (state) => state.surveyList,
    }
}
