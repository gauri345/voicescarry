export default {
    state: {
        lang: 'en',
        factoryCode: '',
        surveyCode: '',
        answers: []
    },

    mutations: {
        UPDATE_LANG: (state, lang) => state.lang = lang,
        UPDATE_SURVEY: (state, survey) => {
            state.surveyCode = survey.surveyCode;
            state.factoryCode = survey.factoryCode;
        },
        UPDATE_FACTORY: (state, factoryCode) => state.factoryCode = factoryCode,
        UPDATE_SURVEY_CODE: (state, surveyCode) => state.surveyCode = surveyCode,
        UPDATE_ANSWER: (state, answer) => state.answers.push(answer)
    }
}