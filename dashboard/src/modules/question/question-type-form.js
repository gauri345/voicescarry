import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";

export default {
    state: {
        questionTypeId: null,
        questionType: '',
        answerValue: '',
        answerValues: [],
    },
    actions: {
        async saveQuestionsType({state, dispatch}) {
            try {
                const dataToStore = {
                    _id: state.questionTypeId,
                    questionType: state.questionType,
                    answerValues: state.answerValues,

                };
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/question-type/`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: dataToStore
                };
                await axios(config);

                await router.push("/question-type/");
                dispatch('showInfo', "questions type and answers type successfully added", {root: true});
            } catch (error) {
                dispatch('showError', "Failed saving questions type in database.", {root: true});
            }
        },

        async fetchQuestionTypeById({commit, dispatch}, questionTypeId) {
            if (questionTypeId) {

                try {
                    const config = {
                        method: 'get',
                        url: `${ApiConfig.API_BASE_URL}/question-type/${questionTypeId}`,
                        headers: {}
                    };

                    const response = await axios(config);
                    const questionType = response.data.data;

                    if (response.data.data) {
                        commit('UPDATE_QUESTION_TYPE_ID', questionTypeId);
                        commit('UPDATE_QUESTION_TYPE', questionType.questionType);
                        commit('UPDATE_ANSWER_VALUES', questionType.answerValues);
                    }
                } catch (error) {
                    dispatch('showError', " Failed fetching the factory to edit.", {root: true});
                }
            } else {
                commit('UPDATE_QUESTION_TYPE', '');
                commit('UPDATE_ANSWER_VALUE', []);
            }
        }
    },
    mutations: {
        UPDATE_QUESTION_TYPE_ID: (state, id) => state.questionTypeId = id,
        UPDATE_QUESTION_TYPE: (state, questionType) => state.questionType = questionType,
        UPDATE_ANSWER_VALUE: (state, answerValue) => state.answerValue = answerValue,
        UPDATE_ANSWER_VALUES: (state, answerValues) => state.answerValues = answerValues,
        REMOVE_ANSWER_VALUE: (state, answerValue) => state.answerValues = state.answerValues.filter(ans => ans !== answerValue),
        UPDATE_QUESTION_TYPE_VALUES: (state) => {

            if (!state.answerValues.includes(state.answerValue) && '' !== state.answerValue) {
                state.answerValues.push(state.answerValue);
            }

            state.answerValue = '';
        }
    },
    getters: {
        questionType: (state) => state.questionType,
        answerValue: (state) => state.answerValue,
        answerValues: (state) => state.answerValues
    }
}