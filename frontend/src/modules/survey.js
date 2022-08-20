import HttpClient from "@/util/http_client";
import LocalStorage from "@/util/local_storage";
import router from "@/router";
import {SURVEY_SESSION_TTL_SECONDS} from "@/config";

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
        getNextQuestion: (state) =>  state.nextQuestion,
        getTotalQuestionCount: (state) => state.allQuestions.length
    },

    actions: {
        async initializeQuestionState({commit, state}, questionNumber) {
            const survey = LocalStorage.get("survey");
            if (state.allQuestions.length <= 0) {
                try {
                    const response = await HttpClient.get(`survey/questions/${survey.surveyId}`  );
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
            router.push({name: 'SurveyPage', params: {number: state.nextQuestion.questionNumber}});
        },

        navigateToPreviousQuestion: ({state}) => {
            router.push({name: 'SurveyPage', params: {number: state.previousQuestion.questionNumber}});
        }
    },

    mutations: {
        SET_ALL_QUESTIONS: (state, questions) => {

            const localized = (contentList) => {
                const lang = LocalStorage.get('language');
                const language = (null === lang) ? 'english' : lang;

                if (contentList.length > 0) {
                    return contentList.filter(content => content.lang === language)[0].content;
                }
            };

            state.allQuestions = questions.map(question => {
                return {
                    questionId: question._id,
                    questionNumber: question.number,
                    questionType: question.questionType,
                    questionTitle: localized(question.titles),
                    answers: question.answers.map(answer => {
                        return {
                            value: answer.value,
                            text: localized(answer.items)
                        };
                    })
                };
            });
        },
        SET_PREVIOUS_QUESTION: (state, question) => state.previousQuestion = question,
        SET_CURRENT_QUESTION: (state, question) => state.currentQuestion = question,
        SET_NEXT_QUESTION: (state, question) => state.nextQuestion = question
    }
}