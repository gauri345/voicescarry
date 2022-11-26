export default {
    state: {
    },

    getters: {
        getAnswers: (state, rootGetters) => {
            const currentQuestion = rootGetters.getCurrentQuestion;


            if ("scale" === currentQuestion.questionType || "sentiment" === currentQuestion.questionType) {
                return currentQuestion.answers.answerValues.map(answer => {
                    let answerToRender = {};

                    switch (answer) {
                        case 'strongly_disagree':
                        case '5':
                            answerToRender = {
                                iconClass: "material-icons very_dissatisfied",
                                value: 5,
                                text: 'sentiment_very_dissatisfied'
                            }
                            break;

                        case 'disagree':
                        case '4':
                            answerToRender = {
                                iconClass: "material-icons dissatisfied",
                                value: 4,
                                text: 'sentiment_dissatisfied'
                            }
                            break;

                        case 'neutral':
                        case '3':
                            answerToRender = {
                                iconClass: "material-icons neutral",
                                value: 3,
                                text: 'sentiment_neutral'
                            }
                            break;

                        case 'agree':
                        case '2':
                            answerToRender = {
                                iconClass: "material-icons satisfied",
                                value: 2,
                                text: 'sentiment_satisfied'
                            }
                            break;

                        case 'strongly_agree':
                        case '1':
                            answerToRender = {
                                iconClass: "material-icons very_satisfied",
                                value: 1,
                                text: 'sentiment_very_satisfied'
                            }
                            break;
                    }

                    return answerToRender;
                });
            }

            return currentQuestion.answers;
        },

        getQuestionType: (state, rootGetters) => {
            return rootGetters.getCurrentQuestion.questionType
        }
    }
}
