import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";

export default {
    namespaced: true,
    state: {
        questionNumber: null,
        supportedLanguages: [],

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
            state.supportedLanguages
                .forEach(supportedLanguage => {
                    if (supportedLanguage.isSelected) {
                        const titleForSelectedLanguage = state.questionTitles.filter(title => title.lang === supportedLanguage.value);
                        if (titleForSelectedLanguage.length < 1) {
                            commit('ADD_TO_QUESTION_TITLE', {
                                lang: supportedLanguage.value,
                                content: ''
                            });

                            commit('ADD_TO_ADDITIONAL_INFORMATION', {
                                lang: supportedLanguage.value,
                                content: ''
                            });

                            commit('ADD_LANGUAGE_FIELD_TO_ANSWER', {
                                lang: supportedLanguage.value,
                                content: ''
                            });
                        }
                    } else {
                        commit('REMOVE_QUESTION_TITLE_BY_LANGUAGE', supportedLanguage.value);
                        commit('REMOVE_ADDITIONAL_INFORMATION_BY_LANGUAGE', supportedLanguage.value);
                        commit('REMOVE_LANGUAGE_FIELD_ANSWER', supportedLanguage.value);
                    }
                });
        },


        async fetchLanguages({dispatch, commit}) {
            try {
                const config = {
                    method: 'get',
                    url: `${ApiConfig.API_BASE_URL}/language/`,
                    headers: {}
                };

                const response = await axios(config);

                commit(
                    'UPDATE_SUPPORTED_LANGUAGES',
                    response.data.data.map(lang => {
                        let isSelected = false;
                        if (lang.name === 'English') {
                            isSelected = true;
                        }

                        return {
                            text: lang.name,
                            value: lang.name.toLowerCase(),
                            isSelected: isSelected
                        }
                    })
                )
            } catch (error) {
                dispatch('showError', " Failed deleting the question to edit.", {root: true});
            }
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

                commit('SET_SELECTED_LANGUAGES', questionFromApi.additionalInformation.map(info => info.lang));

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
                    console.log(answerFromApi)
                    return {
                        type: answerFromApi.answerCategory,
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
                        lang: questionTitle.lang,
                        content: questionTitle.content
                    }
                }),
                additionalInformation: state.additionalInformationList.map(info => {
                    return {
                        lang: info.lang,
                        content: info.content
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
                                        lang: detail.lang,
                                        content: detail.content
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
                .filter(questionTitle => questionTitle.lang !== language);
        },
        ADD_TO_ADDITIONAL_INFORMATION: (state, additionalInformation) => state.additionalInformationList.push(additionalInformation),
        UPDATE_QUESTION_ADDITIONAL_INFORMATION: (state, additionalInformationList) => state.additionalInformationList = additionalInformationList,
        REMOVE_ADDITIONAL_INFORMATION_BY_LANGUAGE: (state, language) => {
            state.additionalInformationList = state.additionalInformationList
                .filter(additionalInformation => additionalInformation.lang !== language);
        },
        UPDATE_ANSWERS: (state, answers) => state.answers = answers,
        ADD_LANGUAGE_FIELD_TO_ANSWER: (state, answerToAdd) => {
            state.answers.forEach(answer => {
                answer.values.forEach(value => {
                    value.details.push(answerToAdd);
                });
            });
        },
        REMOVE_LANGUAGE_FIELD_ANSWER: (state, language) => {
            state.answers.forEach(answer => {
                answer.values.forEach(value => {
                    value.details = value.details.filter(detail => detail.lang !== language)
                });
            });
        },
        UPDATE_QUESTION_TYPE: (state, questionType) => state.questionType = questionType,
        UPDATE_QUESTION_NUMBER: (state, questionNumber) => state.questionNumber = questionNumber,
        UPDATE_ANSWERS_WITH_ANSWER_FROM_API: (state, itemToUpdate) => {
            state.answers = state.answers.map(answer => {
                if (answer.type === state.questionType) {
                    answer.values = itemToUpdate
                } else {
                    answer.values.forEach(value => {
                        state.supportedLanguages
                            .filter(supportedLanguage => supportedLanguage.isSelected)
                            .forEach(supportedLanguage => {
                                if (value.details.find(detail => detail.lang !== supportedLanguage.value)) {
                                    value.details.push({
                                        lang: supportedLanguage.value,
                                        content: ''
                                    })
                                }
                            })
                    })
                }

                return answer;
            })
        },

        SET_SELECTED_LANGUAGES: (state, languages) => {
            state.supportedLanguages = state.supportedLanguages.map(supportedLanguage => {
                if (languages.includes(supportedLanguage.value)) {
                    supportedLanguage.isSelected = true
                }
                return supportedLanguage;
            })
        },

        UPDATE_SUPPORTED_LANGUAGES: (state, languages) => {
            state.supportedLanguages = languages
        }
    }
}
