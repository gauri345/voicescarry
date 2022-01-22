import HttpClient from "@/util/HttpClient";

export default {
    state: {
        currentQuestion: null,
        nextQuestion: null,
        previousQuestion: null,
        allQuestions: []
    },

    getters: {
        allQuestions: (state) => state.allQuestions,
        currentQuestion: (state) => state.currentQuestion,
        nextQuestion: (state) => state.nextQuestion,
        previousQuestion: (state) => state.previousQuestion
    },

    actions: {
        async initializeQuestionState({commit, state}, questionNumber) {

            console.log("question number: ", questionNumber);

            if (state.allQuestions.length <= 0) {
                try {
                    const response = await HttpClient.get('question');
                    commit('SET_ALL_QUESTIONS', response.data.data);
                } catch (error) {
                    console.error(error)
                }
            }

            const previousQuestion = state.allQuestions.filter(question => {
                return questionNumber - 1 === question.number;
            });

            if (previousQuestion.length > 0) {
                commit('SET_PREVIOUS_QUESTION', previousQuestion[0]);
            }

            const currentQuestion = state.allQuestions.filter(question => {
                return questionNumber === question.number;
            });

            if (currentQuestion.length > 0) {
                commit('SET_CURRENT_QUESTION', currentQuestion[0]);
            }

            const nextQuestion = state.allQuestions.filter(question => {
                return questionNumber + 1 === question.number;
            });

            if (nextQuestion.length > 0) {
                commit('SET_NEXT_QUESTION', nextQuestion[0]);
            }


            console.log("current state: ", state);
        }
    },

    mutations: {
        SET_ALL_QUESTIONS: (state, questions) => state.allQuestions = questions,
        SET_PREVIOUS_QUESTION: (state, question) => state.previousQuestion = question,
        SET_CURRENT_QUESTION: (state, question) => state.currentQuestion = question,
        SET_NEXT_QUESTION: (state, question) => state.nextQuestion = question
    }
}