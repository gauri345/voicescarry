import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";
import _ from 'lodash';

export default {
    state: {
        questionType: 'select',
        questionNumber: null,
        questionSlug: null,
        questionTitleEnglish: null,
        questionTitleVietnamese: null,
        additionalInformationEnglish: null,
        additionalInformationVietnamese: null,
        answers: [
            {
                answerValue: null,
                answerTitleEnglish: null,
                answerTitleVietnamese: null
            }
        ]
    },
    getters: {
        getAnswers: (state) => {
            console.log(state.answers);
            return state.answers
        },
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

                commit('UPDATE_ALL_ANSWERS', response.data.data);
                commit('UPDATE_QUESTION', response.data.data);
            } catch (error) {
                dispatch('showError', " Failed deleting the question to edit.", {root: true});
            }
        },
        addNewAnswer({commit}) {
            commit('ADD_NEW_EMPTY_ANSWER');
        },

        removeExistingAnswer({commit}, answerIndex) {
            commit('REMOVE_ANSWER_BY_INDEX', answerIndex);
        },

        createSlug({commit}) {
            commit('UPDATE_SLUG');
        },

        updateAnswerFieldByIndex({commit, state}, dataForUpdate) {
            const answerToUpdate = state.answers[dataForUpdate.index];

            if ('answerValue' === dataForUpdate.fieldName) {
                answerToUpdate.answerValue = dataForUpdate.value;
            }
            if ('answerTitleEnglish' === dataForUpdate.fieldName) {
                answerToUpdate.answerTitleEnglish = dataForUpdate.value;
            }

            if ('answerTitleVietnamese' === dataForUpdate.fieldName) {
                answerToUpdate.answerTitleVietnamese = dataForUpdate.value;
            }

            commit('UPDATE_ANSWER_ITEM_BY_INDEX', answerToUpdate, dataForUpdate.index);
        },

        async saveQuestion({state, dispatch}) {

            const questionToSave = {
                number: state.questionNumber,
                slug: state.questionSlug,
                questionType: state.questionType,
                titles: [
                    {
                        lang: "en",
                        content: state.questionTitleEnglish
                    },
                    {
                        lang: "vi",
                        content: state.questionTitleVietnamese
                    }
                ],
                answers: state.answers.map(ans => {
                    return {
                        value: ans.answerValue,
                        items: [
                            {
                                lang: "en",
                                content: ans.answerTitleEnglish
                            },
                            {
                                lang: "vi",
                                content: ans.answerTitleVietnamese
                            }
                        ]
                    };
                }),
                additionalInformation: [
                    {
                        lang: "en",
                        content: state.additionalInformationEnglish
                    },
                    {
                        lang: "vi",
                        content: state.additionalInformationVietnamese
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

                await router.push("/question");

                dispatch('showInfo', "New question successfully added", {root: true});

            } catch (error) {
                dispatch('showError', " Failed saving the User. Please try again.", {root: true});
            }
        }
    },
    mutations: {
        UPDATE_QUESTION: (state, question) => {
            const questionTitleInEng = question.titles.filter(questionTitle => questionTitle.lang === 'en')[0].content;
            const questionTitleInVi = question.titles.filter(questionTitle => questionTitle.lang === 'vi')[0].content;
            const additionalInformationEng = question.additionalInformation.filter(additionalInformation => additionalInformation.lang === 'en')[0].content;
            const additionalInformationVi = question.additionalInformation.filter(additionalInformation => additionalInformation.lang === 'vi')[0].content;

            state.questionType = question.questionType;
            state.questionNumber = question.number;
            state.questionTitleEnglish = questionTitleInEng;
            state.questionTitleVietnamese = questionTitleInVi;
            state.additionalInformationEnglish = additionalInformationEng;
            state.additionalInformationVietnamese = additionalInformationVi;
        },
        ADD_NEW_EMPTY_ANSWER: (state) => state.answers.push({
            answerValue: null,
            answerTitleEnglish: null,
            answerTitleVietnamese: null
        }),
        UPDATE_SLUG: (state) => state.questionSlug = _.snakeCase(state.questionTitleEnglish).substring(0, 50),
        UPDATE_QUESTION_TYPE:(state, questionType) => state.questionType = questionType,
        UPDATE_QUESTION_NUMBER:(state, questionNumber) => state.questionNumber = questionNumber,
        UPDATE_QUESTION_TITLE_ENGLISH:(state, questionTitleEnglish) => state.questionTitleEnglish = questionTitleEnglish,
        UPDATE_QUESTION_TITLE_VIETNAMESE:(state, questionTitleVietnamese) => state.questionTitleVietnamese = questionTitleVietnamese,
        UPDATE_ADDITIONAL_INFORMATION_ENGLISH:(state, additionalInformationEnglish) => state.additionalInformationEnglish = additionalInformationEnglish,
        UPDATE_ADDITIONAL_INFORMATION_VIETNAMESE:(state, additionalInformationVietnamese) => state.additionalInformationVietnamese = additionalInformationVietnamese,

        UPDATE_ALL_ANSWERS: (state, question) => {
            state.answers = question.answers.map(answer => {
                return {
                    answerValue: answer.value,
                    answerTitleEnglish: answer.items.filter(answer => answer.lang==='en')[0].content,
                    answerTitleVietnamese: answer.items.filter(answer => answer.lang==='vi')[0].content,
                };
            });
        },
        REMOVE_ANSWER_BY_INDEX: (state, index) => state.answers.splice(index, 1),
        UPDATE_ANSWER_ITEM_BY_INDEX: (state, item, index) => state.answers[index] = item,
    }
}
