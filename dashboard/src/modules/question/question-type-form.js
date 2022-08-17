import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";

export default {
    state: {
        questionType: '',
        answerValue: '',
        answerValues: [],
    },
    actions: {
        async saveQuestionsType({state, dispatch}) {
            try {
                const dataToStore = {
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
        }
    },
    mutations: {
        UPDATE_QUESTION_TYPE: (state, questionType) => state.questionType = questionType,
        UPDATE_ANSWER_VALUE: (state, answerValue) => state.answerValue = answerValue,
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