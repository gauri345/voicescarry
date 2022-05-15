const axios = require('axios');

export default {
    actions: {
        async fetchFeedback({commit}) {
            const config = {
                method: 'get',
                url: 'http://localhost:4000/api/feedback',
                headers: {}
            };

            try {
                const response = await axios(config);

                const feedbackList = response.data.data;

                commit('UPDATE_ALL_FEEDBACKS', feedbackList);

            } catch (error) {
                commit('TOGGLE_SERVER_MESSAGE');
                console.log("Failed fetching feedback.", error);
            }
        },

        async deleteFeedback({commit, state}, feedbackId) {
            // make a http request to feedback endpoint with delete method.
            // if the feedback is successfully deleted, update the state and remove that deleted feedback.

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
        }
    },
    state: {
        feedbackList: [],
        feedbackDeleteError: false,
        feedbackDeleteInfo: false,
        serverErrorDisplayed: false
    },

    getters: {
        allFeedbacks: (state) => state.feedbackList,
        feedbackDeleteError: (state) => state.errorMessageDisplayed,
        feedbackDeleteInfo: (state) => state.infoMessageDisplayed,
        serverErrorDisplayed: (state) => state.serverErrorDisplayed
    },

    mutations: {
        UPDATE_ALL_FEEDBACKS: (state, feedbackList) => state.feedbackList = feedbackList,
        TOGGLE_DELETE_FEEDBACK_ERROR_MESSAGE: (state) => state.errorMessageDisplayed = !state.errorMessageDisplayed,
        TOGGLE_DELETE_FEEDBACK_INFO_MESSAGE: (state) => state.infoMessageDisplayed = !state.infoMessageDisplayed,
        TOGGLE_SERVER_MESSAGE: (state) => state.serverErrorDisplayed = !state.serverErrorDisplayed
    }
}
