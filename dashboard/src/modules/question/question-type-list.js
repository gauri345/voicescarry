import ApiConfig from "@/config/ApiConfig";
import axios from "axios";

export default {
    state: {
        questionTypes: []
    },

    getters: {
        questionTypes: (state) => state.questionTypes
    },

    actions: {
       async fetchAllQuestionTypes({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/question-type`,
                headers: {}
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_QUESTION_TYPES', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed fetching factories.", {root: true});
            }
        }
    },

    mutations: {
        UPDATE_ALL_QUESTION_TYPES: (state, questionTypeList) => state.questionTypes = questionTypeList
    }
}