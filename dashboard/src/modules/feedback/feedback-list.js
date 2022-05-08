const axios = require('axios');

export default {
    actions: {
        async fetchFeedback({commit}) {
            const config = {
                method: 'get',
                url: 'http://localhost:4000/api/feedback',
                headers: { }
            };

            try {
                const response = await axios(config);

                const feedbackList = response.data.data;

                commit('UPDATE_ALL_FEEDBACKS', feedbackList);

            } catch(error) {
                console.log("Failed fetching feedback.", error);
            }
        },

        async deleteFeedback({commit, state}, feedbackId) {
            //make a http request to feedback endpoint with delete method.
            // if the feedback is successfully deleted, update the state and remove that deleted feedback.

            const newFeedbackList = state.feedbackList.filter(feedback => feedback._id !== feedbackId);


            console.log(newFeedbackList);


            commit('UPDATE_ALL_FEEDBACKS', newFeedbackList);
        }
    },
    state: {
        feedbackList: []
    },

    getters: {
      allFeedbacks: (state) => state.feedbackList
    },

    mutations: {
        UPDATE_ALL_FEEDBACKS: (state, feedbackList) => state.feedbackList = feedbackList
    }
}
