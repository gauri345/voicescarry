const axios = require('axios');
import ApiConfig from "@/config/ApiConfig";

export default {
    actions: {
        async fetchFeedback({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/feedback`,
                headers: {}
            };

            try {
                const response = await axios(config);

                const feedbackList = response.data.data;

                commit('UPDATE_ALL_FEEDBACKS', feedbackList);
            } catch (error) {
                dispatch('showError', "Failed fetching feedback.", {root: true});
            }
        },

        async deleteFeedback({commit, state, dispatch}, feedbackId) {
            const config = {
                method: 'delete',
                url: `${ApiConfig.API_BASE_URL}/feedback/${feedbackId}`
            };

            try {
                const response = await axios(config);
                if (response.status === 200) {
                    const newFeedbackList = state.feedbackList.filter(feedback => feedback._id !== feedbackId);
                    commit('UPDATE_ALL_FEEDBACKS', newFeedbackList);
                }
                if (response.status === 404) {
                    dispatch('showError', "Failed deleting feedback.", {root: true});
                }
            } catch (error) {
                dispatch('showError', "Failed fetching feedback.", {root: true});
            }
        },
        downloadFeedbacks() {
            window.location.href = `${ApiConfig.API_BASE_URL}/feedback/download-all`;
        },
    },
    state: {
        feedbackList: [],
    },

    getters: {
        allFeedbacks: (state) => state.feedbackList,
    },

    mutations: {
        UPDATE_ALL_FEEDBACKS: (state, feedbackList) => state.feedbackList = feedbackList,
    }
}
