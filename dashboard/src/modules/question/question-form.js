import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";
import _ from 'lodash';

export default {
    namespaced: true,
    state: {

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


        answerTypes: [],
        questionNumber: null,
        questionSlug: null,
        questionTitleEnglish: null,
        questionTitleVietnamese: null,
        additionalInformationEnglish: null,
        additionalInformationVietnamese: null,
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


        getAnswers: (state) => state.answers,
        answerTypes: (state) => state.answerTypes,
        getQuestionSlug: (state) => state.questionSlug,
        selectedQuestionType: (state) => {
            const filtered = state.answerTypes.filter(answerType => answerType.answerType === state.questionType);

            if (filtered[0]) {
                return filtered[0];
            } else {
                return {
                    questionType: state.questionType,
                    answerValues: []
                };
            }
        }
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


                        console.log('incoming', answer);

                        const answerToReturn = {
                            type: answer.type
                        };

                        answerToReturn.values = answer.values.map(value => {
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
                                valueToReturn.details =  value.details.filter(detail => detail.language === language.value);
                            }

                            return valueToReturn;
                        });

                        console.log('resulting', answerToReturn)

                        return answerToReturn;
                    });

                    commit('UPDATE_ANSWERS' ,updatedAnswers)
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

                commit('UPDATE_ALL_ANSWERS', response.data.data);
                commit('UPDATE_QUESTION', response.data.data);
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

        addNewAnswer({commit}) {
            commit('ADD_NEW_EMPTY_ANSWER');
        },

        removeExistingAnswer({commit}, answerIndex) {
            commit('REMOVE_ANSWER_BY_INDEX', answerIndex);
        },

        createSlug({commit}) {
            commit('UPDATE_SLUG');
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
        UPDATE_QUESTION_TYPES: (state, questionTypes) => state.answerTypes = questionTypes,
        UPDATE_ADDITIONAL_INFORMATION_ENGLISH: (state, additionalInformationEnglish) => state.additionalInformationEnglish = additionalInformationEnglish,
        UPDATE_ADDITIONAL_INFORMATION_VIETNAMESE: (state, additionalInformationVietnamese) => state.additionalInformationVietnamese = additionalInformationVietnamese,

        UPDATE_ALL_ANSWERS: (state, question) => {
            state.answers = question.answers.map(answer => {
                return {
                    answerValue: answer.value,
                    answerTitleEnglish: answer.items.filter(answer => answer.lang === 'en')[0].content,
                    answerTitleVietnamese: answer.items.filter(answer => answer.lang === 'vi')[0].content,
                };
            });
        },
        REMOVE_ANSWER_BY_INDEX: (state, index) => state.answers.splice(index, 1),
        UPDATE_QUESTION_TYPE: (state, questionType) => state.questionType = questionType
    }
}
