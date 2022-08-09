/*
When the form loads.
Call a new action which will fetch all available factories from the database.
Use the result to create the select box.
Once the used selects an specific factory
-> add another action on this file and load all the questions
-> provide the option for the user so select specific question

 */
import ApiConfig from "@/config/ApiConfig";

const axios = require('axios');

export default {
    state: {
        factoryList: [],
        questionList:[],
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
