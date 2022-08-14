import ApiConfig from "@/config/ApiConfig";
import router from "@/routes";

const axios = require('axios');

export default {
    state: {
        factoryList: [],
        questionList: [],
        survey: {
            surveyName: '',
            factoryId: '',
            questions: []
        }
    },
    actions: {
        toggleQuestionToSurvey({commit, state}, questionId) {
            if (state.survey.questions.includes(questionId)) {
                commit('REMOVE_QUESTION_FROM_SURVEY', questionId);
            } else {
                commit('ADD_QUESTION_FROM_SURVEY', questionId);
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
                commit('UPDATE_QUESTIONS_LIST', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed loading questions. Please try again.", {root: true})
            }
        },

        async addSurvey({state, dispatch}) {
            try {
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/survey/save`,
                    header: {
                        'content-Type': 'application/json'
                    },
                    data: state.survey
                };

                await axios(config);
                await router.push({name: 'SurveyList'});

                dispatch('showInfo', "A new survey is successfully added.", {root: true});
            } catch (error) {
                dispatch('showError', "Failed saving survey in database.", {root: true});
            }
        }
    },
    getters: {
        factoryList: (state) => state.factoryList,
        questionList: (state) => state.questionList
    },
    mutations: {
        UPDATE_ALL_FACTORY_CODE: (state, factoryList) => {
            state.factoryList = factoryList
        },
        UPDATE_QUESTIONS_LIST: (state, questionList) => {
            state.questionList = questionList.map((question) => {
                return {
                    questionId: question._id,
                    questionTitle: question.titles.filter(title => title.lang === 'en')[0].content
                };
            });
        },
        UPDATE_FACTORY_ID_IN_SURVEY: (state, factoryId) => state.survey.factoryId = factoryId,
        UPDATE_SURVEY_NAME_IN_SURVEY: (state, surveyName) => state.survey.surveyName = surveyName,
        REMOVE_QUESTION_FROM_SURVEY: (state, questionId) => {
            const index = state.survey.questions.indexOf(questionId)
            if (index !== -1) {
                state.survey.questions.splice(index, 1)
            }
        },
        ADD_QUESTION_FROM_SURVEY: (state, questionId) => state.survey.questions.push(questionId)
    }
}
