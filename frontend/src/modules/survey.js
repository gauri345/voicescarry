import HttpClient from "@/util/http_client";
import LocalStorage from "@/util/local_storage";
import router from "@/router";

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
            const survey = LocalStorage.get("survey");
            if (state.allQuestions.length <= 0) {
                try {
                    const response = await HttpClient.get(`survey/questions/${survey.surveyId}`);
                    commit('SET_ALL_QUESTIONS', response.data.data);
                } catch (error) {
                    console.error(error)
                }
            }

            const previousQuestion = state.allQuestions[questionNumber - 1];

            if (previousQuestion) {
                commit('SET_PREVIOUS_QUESTION', previousQuestion);
            }

            const currentQuestion = state.allQuestions[questionNumber];

            if (currentQuestion) {
                commit('SET_CURRENT_QUESTION', currentQuestion);
            }

            const nextQuestion = state.allQuestions[questionNumber + 1];

            if (nextQuestion) {
                commit('SET_NEXT_QUESTION', nextQuestion);
            }
        },

        clearSelectedQuestions: ({commit}) => {
            commit('SET_PREVIOUS_QUESTION', {});
            commit('SET_CURRENT_QUESTION', {});
            commit('SET_NEXT_QUESTION', {});
        },

        storeAnswerInLocalStorage: ({commit, state}, answer) => {
            const answerToStore = {
                answerText: answer.text,
                answerValue: answer.value,
                questionId: state.currentQuestion.questionId,
                questionNumber: state.currentQuestion.questionNumber,
                survey: LocalStorage.get('survey')
            };

            const existing = LocalStorage.get("answer");

            if (!existing) {
                LocalStorage.setWithoutTtl("answer", [answerToStore]);
            } else {
                const filtered = existing.filter(storedAnswer => {
                    return storedAnswer.questionId !== state.currentQuestion.questionId;
                });

                filtered.push(answerToStore);
                LocalStorage.setWithoutTtl("answer", filtered);
            }
        },

        navigateToNextQuestion: ({state}) => {
            router.push({name: 'SurveyPage', params: {number: state.nextQuestion.order}});
        },

        navigateToPreviousQuestion: ({state}) => {
            router.push({name: 'SurveyPage', params: {number: state.previousQuestion.order}});
        }
    },

    mutations: {
        SET_ALL_QUESTIONS: (state, questions) => {

            const localized = (contentList) => {
                const lang = localStorage.getItem('language');
                const language = (null === lang) ? 'en' : lang;

                if (contentList.length > 0) {
                    const filtered = contentList.filter(content => content.lang === language);

                    if (filtered.length > 0) {
                        return filtered[0].content
                    } else {
                        const filtere = contentList.filter(content => content.lang === 'en');
                        if (filtere) {
                            return filtere[0].content
                        }

                        return '';
                    }
                }
            };

            state.allQuestions = questions.map((question, index) => {
                const answers = question.answers.length > 0 ? question.answers[0] : []
                return {
                    order: index,
                    questionId: question._id,
                    questionNumber: question.number,
                    questionType: question.questionType,
                    questionTitle: localized(question.titles),
                    answers: answers
                };
            });
        },
        SET_PREVIOUS_QUESTION: (state, question) => state.previousQuestion = question,
        SET_CURRENT_QUESTION: (state, question) => state.currentQuestion = question,
        SET_NEXT_QUESTION: (state, question) => state.nextQuestion = question
    }
}