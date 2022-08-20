import ApiConfig from "@/config/ApiConfig";
import router from "@/routes";

const axios = require('axios');

export default {
    state: {
        factoryList: [],
        survey: {
            surveyName: '',
            factoryId: '',
            questions: [{}],
        }
    },
    actions: {
        toggleSelectAllQuestions({commit, state}) {
            if (!state.survey.questions[0].isSelected) {
                commit('ADD_ALL_QUESTIONS_TO_SURVEY');
            } else {
                commit('REMOVE_ALL_QUESTIONS_FROM_SURVEY');
            }
        },

        toggleQuestionToSurvey({commit, state}, questionId) {
            if (state.survey.questions.find(question => question.questionId === questionId)) {
                commit('REMOVE_QUESTION_FROM_SURVEY', questionId);
            } else {
                commit('ADD_QUESTION_TO_SURVEY', questionId);
            }
        },
        async fetchFactories({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/factory`,
                headers: {}
            };

            try {
                const response = await axios(config);
                commit('UPDATE_ALL_FACTORY_CODE', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed loading factories. Please try again.", {root: true});
            }
        },
        async fetchAllQuestions({commit, dispatch}) {
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/question`,
                headers: {}
            };
            try {
                const response = await axios(config)
                console.log( response.data.data);
                commit('UPDATE_QUESTIONS_LIST', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed loading questions. Please try again.", {root: true})
            }
        },

        async addSurvey({state, dispatch}) {
            const surveyToSave = {
                surveyName: state.survey.surveyName,
                factoryId: state.survey.factoryId,
                questions: state.survey.questions.map(question => question.questionId)
            };

            try {
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/survey/save`,
                    header: {
                        'content-Type': 'application/json'
                    },
                    data: surveyToSave
                };

                await axios(config);
                await router.push({name: 'SurveyList'});

                dispatch('showInfo', "A new survey is successfully added.", {root: true});
            } catch (error) {
                dispatch('showError', "Failed saving survey. Please make sure you enter correct data.", {root: true});
            }
        }
    },
    getters: {
        factoryList: (state) => state.factoryList,
        questionList: (state) => state.survey.questions
    },
    mutations: {
        UPDATE_ALL_FACTORY_CODE: (state, factoryList) => {
            state.factoryList = factoryList
        },
        UPDATE_QUESTIONS_LIST: (state, questionList) => {
            state.survey.questions = questionList.map((question) => {
                return {
                    questionId: question._id,
                    isSelected: false,
                    title: question.titles.filter(title => title.lang === 'english')[0].content
                };
            });
        },
        UPDATE_FACTORY_ID_IN_SURVEY: (state, factoryId) => state.survey.factoryId = factoryId,
        UPDATE_SURVEY_NAME_IN_SURVEY: (state, surveyName) => state.survey.surveyName = surveyName,
        REMOVE_QUESTION_FROM_SURVEY: (state, questionId) => {
            state.survey.questions = state.survey.questions.map(question => {
                if (question.questionId === questionId)
                    question.isSelected = false;
                return question;
            });
        },
        ADD_QUESTION_TO_SURVEY: (state, questionId) => {
            state.survey.questions = state.survey.questions.map(question => {
                if (question.questionId === questionId)
                    question.isSelected = true;
                return question;
            });
        },
        REMOVE_ALL_QUESTIONS_FROM_SURVEY: (state) => {
            state.survey.questions = state.survey.questions.map(question => {
                question.isSelected = false;
                return question;
            });
        },
        ADD_ALL_QUESTIONS_TO_SURVEY: (state) => {
            state.survey.questions = state.survey.questions.map(question => {
                question.isSelected = true;
                return question;
            });
        }
    }
}
