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
                lang: 'english',
                content: ''
            }
        ],

        additionalInformationList: [
            {
                lang: 'english',
                content: ''
            }
        ],

        questionType: 'select',

        answers: [
            {
                type: 'select',
                values: [
                    {
                        value: "1",
                        details: [
                            {
                                content: '',
                                lang: 'english',
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
            const filteredLanguage = state.supportedLanguages.filter(language => language.isSelected);

            filteredLanguage.forEach(language => {
                const existingQuestionTitle = state.questionTitles.find(title => title.language === language.value);
                if (!existingQuestionTitle) {
                    commit('ADD_TO_QUESTION_TITLE', {
                        lang: language.value,
                        content: ''
                    });
                } else {
                    commit('REMOVE_QUESTION_TITLE_BY_LANGUAGE', language.value);
                }
            });

            filteredLanguage
                .forEach(language => {
                    const existingAdditionalInfo = state.additionalInformationList.find(info => info.lang === language.value);
                    if (!existingAdditionalInfo) {
                        commit('ADD_TO_ADDITIONAL_INFORMATION', {
                            lang: language.value,
                            content: ''
                        });
                    } else {
                        commit('REMOVE_ADDITIONAL_INFORMATION_BY_LANGUAGE', language.value);
                    }
                });


            filteredLanguage
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
                                            lang: language.value,
                                            content: ''
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


        async fetchQuestionById({commit, dispatch}, questionId) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/question/${questionId}`,
                    headers: {}
                };

                const response = await axios(config);


                const questionFromApi = response.data.data;

                commit('UPDATE_QUESTION_NUMBER', questionFromApi.number);
                commit(
                    'UPDATE_QUESTION_TITLES',
                    questionFromApi.titles.map(apiQuestionTitle => {
                        return {
                            lang: apiQuestionTitle.lang,
                            content: apiQuestionTitle.content
                        }
                    })
                );

                commit(
                    'UPDATE_QUESTION_ADDITIONAL_INFORMATION',
                    questionFromApi.additionalInformation.map(info => {
                        return {
                            lang: info.lang,
                            content: info.content,
                        };
                    })
                );

                commit('UPDATE_QUESTION_TYPE', questionFromApi.questionType);
                commit(
                    'UPDATE_ANSWERS_WITH_ANSWER_FROM_API',
                    questionFromApi.answers.map(apiAnswerValues => {
                        return {
                            value: apiAnswerValues.value,
                            details: apiAnswerValues.items.map(item => {
                                return {
                                    content: item.content,
                                    lang: item.lang,
                                }
                            })
                        };
                    })
                );

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
                                        content: '',
                                        lang: 'english',
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
            const questionToSave = {
                number: state.questionNumber,
                questionType: state.questionType,
                titles: state.questionTitles.map(questionTitle => {
                    return {
                        lang: questionTitle.language,
                        content: questionTitle.text
                    }
                }),
                additionalInformation: state.additionalInformationList.map(info => {
                    return {
                        lang: info.language,
                        content: info.text
                    }
                }),
                answers: state.answers
                    .filter(answer => answer.type === state.questionType)
                    .flatMap(answer => {
                        return answer.values.flatMap(value => {
                            return {
                                value: value.value,
                                items: value.details.map(detail => {
                                    return {
                                        lang: detail.language,
                                        content: detail.text
                                    };
                                })
                            }
                        });
                    })
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
        ADD_TO_QUESTION_TITLE: (state, questionTitle) => state.questionTitles.push(questionTitle),
        UPDATE_QUESTION_TITLES: (state, questionTitles) => state.questionTitles = questionTitles,
        REMOVE_QUESTION_TITLE_BY_LANGUAGE: (state, language) => {
            state.questionTitles = state.questionTitles
                .filter(questionTitle => questionTitle.language === language);
        },
        ADD_TO_ADDITIONAL_INFORMATION: (state, additionalInformation) => state.additionalInformationList.push(additionalInformation),
        UPDATE_QUESTION_ADDITIONAL_INFORMATION: (state, additionalInformationList) => state.additionalInformationList = additionalInformationList,
        REMOVE_ADDITIONAL_INFORMATION_BY_LANGUAGE: (state, language) => {
            state.additionalInformationList = state.additionalInformationList
                .filter(additionalInformation => additionalInformation.language === language);
        },
        UPDATE_ANSWERS: (state, answers) => state.answers = answers,
        UPDATE_QUESTION_TYPE: (state, questionType) => state.questionType = questionType,
        UPDATE_QUESTION_NUMBER: (state, questionNumber) => state.questionNumber = questionNumber,
        UPDATE_ANSWERS_WITH_ANSWER_FROM_API: (state, itemToUpdate) => state.answers = state.answers.map(answer => {
            if (answer.type === state.questionType) {
                answer.values = itemToUpdate
            }

            return answer;
        })
    }
}
