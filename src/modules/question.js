import HttpClient from "@/util/HttpClient";

export default {
    state: {
        currentQuestion: {},
        nextQuestionNumber: {},
        previousQuestionNumber: {}
    },

    getters: {
        allQuestions: (state) => state.allQuestions,
        currentQuestion: (state) => state.currentQuestion,
        nextQuestion: (state) => state.nextQuestion,
        previousQuestion: (state) => state.previousQuestion
    },

    actions: {
        async fetchQuestionById({commit}, questionId) {
            try {
                const response = await HttpClient.get('question/question_id=' + questionId);

                commit('UPDATE_CURRENT_QUESTION', response.data);
            }catch (error) {
                console.error(error)
            }
        }
    },

    mutations: {
        UPDATE_CURRENT_QUESTION: (state, question) => state.currentQuestion = question,
    }
}