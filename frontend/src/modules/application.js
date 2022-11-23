export default {
    state: {
        lang: 'en',
        factoryCode: '',
        surveyCode: '',
        answers: []
    },

    mutations: {
        UPDATE_SURVEY: (state, survey) => {
            state.surveyCode = survey.surveyCode;
            state.factoryCode = survey.factoryCode;
        },
    }
}