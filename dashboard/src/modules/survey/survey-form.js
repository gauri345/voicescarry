
import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    state: {
        factoryList: [],
        questionList:[],
        survey: {
            factoryCode:'',
            surveyCode: '12345',
            surveyDate: new Date().getDate(),
            questions: []
        }
    },
    actions: {
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
        async fetchAllQuestions({commit, dispatch}){
            const config = {
                method: 'get',
                url: `${ApiConfig.API_BASE_URL}/question`,
                headers: {}
            };
            try {
                const response = await axios(config)
                commit('UPDATE_QUESTIONS_LIST', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed loading questions. Please try again.", {root:true})
            }
        },
        async addSurvey({state}) {
            console.log('on add survey');
            console.log(state.survey);

            /*
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
                //await router.push("/survey/save")
                dispatch('showInfo', "survey successfully added", {root: true});

            } catch(error) {
                dispatch('showError', "Failed saving survey in database.", {root: true});
            }
            */
        },

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

            const mapperFunction = (question) => {
                return {
                    questionId: question._id,
                    questionTitle: question.titles.filter(title => title.lang === 'en')[0].content
                };
            };

          state.questionList = questionList.map(mapperFunction);
        }
    }
}
