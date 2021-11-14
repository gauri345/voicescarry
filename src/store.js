import {reactive} from "vue";

const store = {
    debug: true,
    state: reactive({
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
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

    setQuestionsAction(questionNumber) {
        const previousQuestion = this.findQuestion(questionNumber - 1);
        if (previousQuestion.length > 0) {
            this.state.previousQuestion = previousQuestion[0];
        }

        const currentQuestion = this.findQuestion(questionNumber);
        if (currentQuestion.length > 0) {
            this.state.currentQuestion = currentQuestion[0];
        }

        const nextQuestion = this.findQuestion(questionNumber + 1);
        if (nextQuestion.length > 0) {
            this.state.nextQuestion = nextQuestion[0];
        }
    },

    findQuestion(questionNumber) {
        return this.state.allQuestions.filter(question => question.questionNumber === questionNumber);
    },

    clearSelectedQuestions() {
        this.state.currentQuestion = {}
        this.state.nextQuestion = {}
        this.state.previousQuestion = {}
    },

    totalAvailableQuestions() {
        return this.state.allQuestions.length;
    }
}

export default store;