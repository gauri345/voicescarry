import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";
//import _ from 'lodash';

export default {
    namespaced: true,
    state: {
        questionNumber: null,
        supportedLanguages: [
            {
                text: 'English',
                value: 'english',
                isSelected: true
            },
            {
                text: 'Vietnamese',
                value: 'vietnamese',
                isSelected: false
            },
            {
                text: 'Nepali',
                value: 'nepali',
                isSelected: false
            }
        ],

        questionTitles: [
            {
                language: 'english',
                text: ''
            }
        ],

        additionalInformationList: [
            {
                language: 'english',
                text: ''
            }
        ],

        questionType: 'select',

        answers: [
            {
                type: 'select',
                values: [
                    {
                        value: 1,
                        details: [
                            {
                                text: '',
                                language: 'english',
                            }
                        ]
                    }
                ]
            }
        ],
    },
    getters: {
        supportedLanguages: (state) => state.supportedLanguages,
        questionTitles: (state) => state.questionTitles,
        additionalInformationList: (state) => state.additionalInformationList,
        selectedAnswer: (state) => {
            const filtered = state.answers.filter(answer => answer.type === state.questionType);
            if (filtered.length >= 1) {
                return filtered[0];
            }
            return {
                type: '',
                values: []
            }
        },
        answers: (state) => state.answers,
    },
    actions: {
        languagesChanged: ({commit, state}) => {
            const filtereLanguage = state.supportedLanguages.filter(language => language.isSelected);

            filtereLanguage.forEach(language => {
                const existingQuestionTitle = state.questionTitles.find(title => title.language === language.value);
                if (!existingQuestionTitle) {
                    commit('ADD_TO_QUESTION_TITLE', {
                        language: language.value,
                        text: ''
                    });
                } else {
                    commit('REMOVE_QUESTION_TITLE_BY_LANGUAGE', language.value);
                }
            });

            filtereLanguage
                .forEach(language => {
                    const existingAdditionalInfo = state.additionalInformationList.find(info => info.language === language.value);
                    if (!existingAdditionalInfo) {
                        commit('ADD_TO_ADDITIONAL_INFORMATION', {
                            language: language.value,
                            text: ''
                        });
                    } else {
                        commit('REMOVE_ADDITIONAL_INFORMATION_BY_LANGUAGE', language.value);
                    }
                });


            filtereLanguage
                .forEach(language => {
                    const updatedAnswers = state.answers.map(answer => {
                        return {
                            type: answer.type,
                            values: answer.values.map(value => {
                                const existingDetail = value.details.find(info => info.language === language.value);

                                const valueToReturn = {
                                    value: value.value
                                };

                                if (!existingDetail) {
                                    valueToReturn.details = value.details.concat(
                                        {
                                            language: language.value,
                                            text: ''
                                        }
                                    );
                                } else {
                                    valueToReturn.details = value.details.filter(detail => detail.language === language.value);
                                }

                                return valueToReturn;
                            })
                        };
                    });

                    commit('UPDATE_ANSWERS', updatedAnswers)
                });
        },


        async fetchQuestionById({ dispatch}, questionId) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/question/${questionId}`,
                    headers: {}
                };

                const response = await axios(config);

                console.log(response);
            } catch (error) {
                dispatch('showError', " Failed deleting the question to edit.", {root: true});
            }
        },

        async fetchAnswerTypes({commit, dispatch}) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/answer-type/`,
                    headers: {}
                };

                const response = await axios(config);
                const answers = response.data.data.map(answerFromApi => {
                    return {
                        type: answerFromApi.answerType,
                        values: answerFromApi.answerValues.map(value => {
                            return {
                                value: value,
                                details: [
                                    {
                                        text: '',
                                        language: 'english',
                                    }
                                ]
                            };
                        })
                    };
                });

                commit('UPDATE_ANSWERS', answers);
            } catch (error) {
                dispatch('showError', " Failed deleting the question to edit.", {root: true});
            }
        },

        async saveQuestion({state, dispatch}) {

            console.log(state)

            const questionToSave = {}

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
        ADD_TO_QUESTION_TITLE: (state, questionTitle) => state.questionTitles.push(questionTitle),
        REMOVE_QUESTION_TITLE_BY_LANGUAGE: (state, language) => {
            state.questionTitles = state.questionTitles
                .filter(questionTitle => questionTitle.language === language);
        },
        ADD_TO_ADDITIONAL_INFORMATION: (state, additionalInformation) => state.additionalInformationList.push(additionalInformation),
        REMOVE_ADDITIONAL_INFORMATION_BY_LANGUAGE: (state, language) => {
            state.additionalInformationList = state.additionalInformationList
                .filter(additionalInformation => additionalInformation.language === language);
        },
        UPDATE_ANSWERS: (state, answers) => state.answers = answers,
        UPDATE_QUESTION_TYPE: (state, questionType) => state.questionType = questionType,
        UPDATE_QUESTION_NUMBER: (state, questionNumber) => state.questionType = questionNumber
    }
}
