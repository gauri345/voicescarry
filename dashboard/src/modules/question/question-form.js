import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import {getField, updateField} from "vuex-map-fields";
import router from "@/routes";
import _ from 'lodash';

export default {
    state: {
        questionType: 'select',
        questionNumber: '',
        questionSlug: 'e1',
        questionTitleEnglish: 'e1',
        questionTitleVietnamese: 'v1',
        additionalInformationEnglish: 'e2',
        additionalInformationVietnamese: 'v2',
        answers: [
            {
                answerValue: 'english answer 1',
                answerTitleEnglish: 'Englisch Title',
                answerTitleVietnamese: 'Vietnamese Title'
            },
            {
                answerValue: 'english answer 2',
                answerTitleEnglish: 'Englisch Title 2',
                answerTitleVietnamese: 'Vietnamese Title 2'
            }
        ]
    },
    getters: {
        getField,
        getAnswers: (state) => state.answers,
        getQuestionSlug: (state) => state.questionSlug
    },
    actions: {
        async fetchQuestionById({commit, dispatch}, questionId) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/question/${questionId}`,
                    headers: {}
                };

                const response = await axios(config);

                commit('UPDATE_QUESTION', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed deleting the User.", {root: true});
            }
        },
        addNewAnswer({commit}, answer) {
            commit('ADD_NEW_ANSWER', answer);
        },

        removeExistingAnswer({commit}, answerIndex) {
            console.log(answerIndex);
            commit('ADD_NEW_ANSWER_BY_INDEX', answerIndex);
        },

        createSlug({commit}) {
            commit('UPDATE_SLUG');
        },

        async saveQuestion({state, dispatch}) {


            const questionToSave = {
                "number": state.questionNumber,
                "slug": state.questionSlug,
                "questionType": state.questionType,
                "titles": [
                    {
                        "lang": "en",
                        "content": state.questionTitleEnglish
                    },
                    {
                        "lang": "vi",
                        "content": state.questionTitleVietnamese
                    }
                ],
                "answers": state.answers.map(ans => {
                    return {
                        "value": ans.answerValue,
                        "items": [
                            {
                                "lang": "en",
                                "content": ans.answerTitleEnglish
                            },
                            {
                                "lang": "vi",
                                "content": ans.answerTitleVietnamese
                            }
                        ]
                    };
                }),
                "additionalInformation": [
                    {
                        "lang": "en",
                        "content": state.additionalInformationEnglish
                    },
                    {
                        "lang": "vi",
                        "content": state.additionalInformationVietnamese
                    }
                ],
            }

            try {
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/question/`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: questionToSave
                };


                await axios(config);

                router.push("/question");

                dispatch('showInfo', "New question successfully added", {root: true});

            } catch (error) {
                dispatch('showError', " Failed saving the User. Please try again.", {root: true});
            }
        }
    },
    mutations: {
        updateField,
        UPDATE_QUESTION: (state, question) => {
            state.questionType = question.questionType;
            state.questionNumber = question.number;
        },
        ADD_NEW_ANSWER: (state, answer) => state.answers.push(answer),
        UPDATE_SLUG: (state) => state.questionSlug = _.snakeCase(state.questionTitleEnglish).substring(0, 50),
        ADD_NEW_ANSWER_BY_INDEX: (state, index) => state.answers.splice(index, 1)
    }
}
