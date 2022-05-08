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

                console.log(feedbackList);

                commit('UPDATE_ALL_FEEDBACKS', feedbackList);

            } catch(error) {
                console.log("Failed fetching feedback.", error);
            }
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
