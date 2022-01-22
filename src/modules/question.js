import HttpClient from "@/util/HttpClient";

export default {
    state: {
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        allQuestions: []
    },

    getters: {
        getAllQuestions: (state) => state.allQuestions,
        getPreviousQuestion: (state) => state.previousQuestion,
        getCurrentQuestion: (state) => state.currentQuestion,
        getNextQuestion: (state) => state.nextQuestion,
        getTotalQuestionCount: (state) => state.allQuestions.length
    },

    actions: {
        async initializeQuestionState({commit, state}, questionNumber) {
            if (state.allQuestions.length <= 0) {
                try {
                    const response = await HttpClient.get('question');
                    commit('SET_ALL_QUESTIONS', response.data.data);
                } catch (error) {
                    console.error(error)
                }
            }

            const previousQuestion = state.allQuestions.filter(question => {
                return questionNumber - 1 === question.questionNumber;
            });

            if (previousQuestion.length > 0) {
                commit('SET_PREVIOUS_QUESTION', previousQuestion[0]);
            }

            const currentQuestion = state.allQuestions.filter(question => {
                return questionNumber === question.questionNumber;
            });

            if (currentQuestion.length > 0) {
                commit('SET_CURRENT_QUESTION', currentQuestion[0]);
            }

            const nextQuestion = state.allQuestions.filter(question => {
                return questionNumber + 1 === question.questionNumber;
            });

            if (nextQuestion.length > 0) {
                commit('SET_NEXT_QUESTION', nextQuestion[0]);
            }
        },

        clearSelectedQuestions: ({commit}) =>{
            commit('SET_PREVIOUS_QUESTION', {});
            commit('SET_CURRENT_QUESTION', {});
            commit('SET_NEXT_QUESTION', {});
        }
    },

    mutations: {
        SET_ALL_QUESTIONS: (state, questions) => {

            const localized = (contentList) => {
                const lang = localStorage.getItem('language');
                const language = (null === lang) ? 'en' : lang;
                
                return contentList.filter(content => content.lang === language)[0].content;
            };

            state.allQuestions = questions.map(question => {
                return {
                    questionNumber: question.number,
                    questionIcon: "self_improvement",
                    questionCategory: localized(question.category.titles),
                    questionTitle: localized(question.titles),
                    additionalInformation: localized(question.additionalInformation),
                };
            });
        },
        SET_PREVIOUS_QUESTION: (state, question) => state.previousQuestion = question,
        SET_CURRENT_QUESTION: (state, question) => state.currentQuestion = question,
        SET_NEXT_QUESTION: (state, question) => state.nextQuestion = question
    }
}