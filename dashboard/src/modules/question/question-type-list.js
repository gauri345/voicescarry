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
        },

        async deleteQuestionType({commit, state, dispatch}, questionTypeId) {
            const config = {
                method: 'delete',
                url: `${ApiConfig.API_BASE_URL}/question-type/${questionTypeId}`
            };

            try {
                const response = await axios(config);
                if (response.status === 200) {
                    const newQuestionTypes = state.questionTypes.filter(question => question._id !== questionTypeId);
                    dispatch('showInfo', "Question type successfully deleted.", {root: true});
                    commit('UPDATE_ALL_QUESTION_TYPES', newQuestionTypes);
                }
                if (response.status === 404) {
                    dispatch('showError', "Failed deleting question type.", {root: true});
                }
            } catch (error) {
                dispatch('showError', "Failed deleting question type.", {root: true});
            }
        },
    },

    mutations: {
        UPDATE_ALL_QUESTION_TYPES: (state, questionTypeList) => state.questionTypes = questionTypeList
    }
}