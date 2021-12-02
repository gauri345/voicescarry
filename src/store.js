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
                questionIcon: "self_improvement",
                questionCategory: "Overall Wellbeing",
                questionTitle: "I am doing well at work",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 1"
            },
            {
                questionNumber: 2,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "My employer ist taking care of me",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 3,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "My workload is manageable",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 5"
            },
            {
                questionNumber: 4,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "The physical working conditions are good",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 4"
            },
            {
                questionNumber: 5,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that my job is secure",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 6,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that my job is meaningful in my life",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 7,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "My work environment is safe",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 8,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that I am part of a team",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 9,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that I have a good work-life balance",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 10,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I understand what is expected from me at work",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 11,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I receive a fair wage",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 12,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "At work, I have the opportunity to learn new skills",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 13,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I have NEVER experienced abuse at work (e.g., being insulted or sexually harassed)",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 14,
                questionIcon: "person",
                questionCategory: "Work Engagement",
                questionTitle: "At my work, I feel bursting with energy",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 15,
                questionIcon: "person",
                questionCategory: "Work Engagement",
                questionTitle: "I am enthusiastic about my job",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 16,
                questionIcon: "person",
                questionCategory: "Work Engagement",
                questionTitle: "I am proud of the work that I do",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 17,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I feel healthy at work in general",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 18,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I am able to eat healthy food at work",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 19,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I have access to clean and sufficient drinking water at work",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 20,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I have good housing",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 21,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "What is your gender?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 22,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "What is yor age?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 23,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "In which position are you working?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
            {
                questionNumber: 24,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "Do you have any other feedback which you want to provide?",
                additionalInformation: "This is the additional information that is to be displayed on the modal box for question 2"
            },
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