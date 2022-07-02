import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    actions: {
        async fetchAllQuestions({commit}) {
            const config = {
                method: 'get',
                url:  `${ApiConfig.API_BASE_URL}/question`,
                headers: {}
            };

            try {
                const response = await axios(config);

                const questionList = response.data.data;

                commit('UPDATE_ALL_question', questionList);

            } catch (error) {
                commit('TOGGLE_SERVER_MESSAGE');
                console.log("Failed fetching questions.", error);
            }
        },

       /* async deleteFeedback({commit, state}, feedbackId) {
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
                } if (response.status == 404) {
                    commit('TOGGLE_DELETE_FEEDBACK_ERROR_MESSAGE');
                }
            } catch (error) {
                commit('TOGGLE_SERVER_MESSAGE');
                console.log("Failed fetching feedback.", error);
            }
        }*/
    },
    state: {
        questionList: [],
        serverErrorDisplayed: false
    },

    getters: {
        allQuestions: (state) => state.questionList,
        getServerErrorDisplayed: (state) => state.serverErrorDisplayed

    },

    mutations: {
        UPDATE_ALL_question: (state, questionList) => state.questionList = questionList,
        TOGGLE_SERVER_MESSAGE: (state) => state.serverErrorDisplayed = !state.serverErrorDisplayed
    }
}
