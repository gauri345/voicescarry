import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    actions: {
        async fetchAllQuestions({commit, dispatch}) {
            const config = {
                method: 'get',
                url:  `${ApiConfig.API_BASE_URL}/question`,
                headers: {}
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_QUESTIONS', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed fetching questions.", {root: true});
            }
        },

       async deleteFeedback({commit, state, dispatch}, feedbackId) {
            const config = {
                method: 'delete',
                url: 'http://localhost:4000/api/feedback/' + feedbackId
            };

            try {
                const response = await axios(config);

                if (response.status === 200) {
                    commit('TOGGLE_DELETE_FEEDBACK_INFO_MESSAGE');
                    const newFeedbackList = state.feedbackList.filter(feedback => feedback._id !== feedbackId);
                    commit('UPDATE_ALL_FEEDBACKS', newFeedbackList);
                } if (response.status === 404) {
                    commit('TOGGLE_DELETE_FEEDBACK_ERROR_MESSAGE');
                }
            } catch (error) {
                dispatch('showError', " Failed deleting the Questions.", {root: true});
            }
        }
    },
    state: {
        questionList: [],
    },

    getters: {
        allQuestions: (state) => state.questionList,
        getServerErrorDisplayed: (state) => state.serverErrorDisplayed

    },

    mutations: {
        UPDATE_ALL_QUESTIONS: (state, questionList) => state.questionList = questionList,
    }
}
