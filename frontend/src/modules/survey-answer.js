import i18n from "@/lang";

export default {
    state: {
    },

    getters: {
        getAnswers: (state, rootGetters) => {
            const currentQuestion = rootGetters.getCurrentQuestion;

            if ('scale' === currentQuestion.questionType) {
                return currentQuestion.answers.map(answer => {
                    let answerToRender = {};

                    switch (answer.value) {
                        case 'strongly_disagree':
                            answerToRender = {
                                iconClass: "material-icons very_dissatisfied",
                                value: answer.text,
                                text: 'sentiment_very_dissatisfied'
                            }
                            break;

                        case 'disagree':
                            answerToRender = {
                                iconClass: "material-icons dissatisfied",
                                value: answer.text,
                                text: 'sentiment_dissatisfied'
                            }
                            break;

                        case 'neutral':
                            answerToRender = {
                                iconClass: "material-icons neutral",
                                value: answer.text,
                                text: 'sentiment_neutral'
                            }
                            break;

                        case 'agree':
                            answerToRender = {
                                iconClass: "material-icons satisfied",
                                value: answer.text,
                                text: 'sentiment_satisfied'
                            }
                            break;

                        case 'strongly_agree':
                            answerToRender = {
                                iconClass: "material-icons very_satisfied",
                                value: answer.text,
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
