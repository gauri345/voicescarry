import {reactive} from "vue";

const store = {
    debug: true,
    state: reactive({
        currentQuestion: {},
        allQuestions: [
            {
                questionNumber: 1,
                questionCategory: "Overall Wellbeing",
                questionTitle: "How happy are you with your working conditions?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 1"
            },
            {
                questionNumber: 2,
                questionCategory: "Caring Work Climate",
                questionTitle: "Are you treated fairly and respectfully?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 3,
                questionCategory: "Manageable Workload",
                questionTitle: "Are the physical working conditions good?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 3"
            }
        ]
    }),

    setQuestionAction(questionNumber) {
        const currentQuestion = this
            .state
            .allQuestions
            .filter(question => question.questionNumber === questionNumber);

        if (currentQuestion.length > 0) {
            this.state.currentQuestion = currentQuestion[0];
        }
    }
}

export default store;