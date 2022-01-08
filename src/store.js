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
                additionalInformation: "No explanation needed"
            },
            {
                questionNumber: 2,
                questionIcon: "spa",
                questionCategory: "Wellbeing at Work",
                questionTitle: "My employer ist taking care of me",
                additionalInformation: "I feel that my employer treats me fairly. I feel supported by my supervisors and managers. There are protocols in place to keep me physically and mentally safe."
            },
            {
                questionNumber: 3,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "My workload is manageable",
                additionalInformation: "I have enough time to do my work properly, with a bearable level of stress and enough time to rest."
            },
            {
                questionNumber: 4,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "The physical working conditions are good",
                additionalInformation: "The temperature where I work is moderate — not overly hot or cold. My work space is well ventilated. It is not overly noisy (considering my job environment). I may sit, stand, or move in relatively comfortable ways in order to do my job."
            },
            {
                questionNumber: 5,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that my job is secure",
                additionalInformation: "I feel that my employment status is not in danger."
            },
            {
                questionNumber: 6,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that my job is meaningful in my life",
                additionalInformation: "I value having my job. It gives me a sense of accomplishment or satisfaction."
            },
            {
                questionNumber: 7,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "My work environment is safe",
                additionalInformation: "Dangerous machines are checked for safety regularly. I have access to healthy food, drinking water, and medical care at my place of work. I have adequate protective equipment. My managers and colleagues follow Covid-19 safety regulations."
            },
            {
                questionNumber: 8,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that I am part of a team",
                additionalInformation: "I can count on my co-workers and supervisors to get the work done and manage stressful situations well."
            },
            {
                questionNumber: 9,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I feel that I have a good work-life balance",
                additionalInformation: "It is easy to take time off from work for personal matters. Work does not disrupt my family time."
            },
            {
                questionNumber: 10,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I understand what is expected from me at work",
                additionalInformation: "I have a sense of control over how I do my work and my job schedule."
            },
            {
                questionNumber: 11,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I receive a fair wage",
                additionalInformation: "I feel that I receive a fair wage for my work and time. I am paid on time. No wages are kept from me. If I work overtime, I am paid for overtime."
            },
            {
                questionNumber: 12,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "At work, I have the opportunity to learn new skills",
                additionalInformation: "My company offers me opportunities to develop and advance my career."
            },
            {
                questionNumber: 13,
                questionIcon: "spa",
                questionCategory: "SHINE Dimensions",
                questionTitle: "I have NEVER experienced abuse at work (e.g., being insulted)",
                additionalInformation: "I feel emotionally and physically safe at work. No one makes me feel uncomfortable, yells at me, threatens me, or touches me in inappropriate ways."
            },
            {
                questionNumber: 14,
                questionIcon: "person",
                questionCategory: "Work Engagement",
                questionTitle: "At my work, I feel bursting with energy",
                additionalInformation: "I feel motivated by my work."
            },
            {
                questionNumber: 15,
                questionIcon: "person",
                questionCategory: "Work Engagement",
                questionTitle: "I am enthusiastic about my job",
                additionalInformation: "/"
            },
            {
                questionNumber: 16,
                questionIcon: "person",
                questionCategory: "Work Engagement",
                questionTitle: "I am proud of the work that I do",
                additionalInformation: "/"
            },
            {
                questionNumber: 17,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I feel healthy at work in general",
                additionalInformation: "/"
            },
            {
                questionNumber: 18,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I am able to eat healthy food at work",
                additionalInformation: "/"
            },
            {
                questionNumber: 19,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I have access to clean and sufficient drinking water at work",
                additionalInformation: "/"
            },
            {
                questionNumber: 20,
                questionIcon: "wb_sunny",
                questionCategory: "Multidimensional Poverty",
                questionTitle: "I have good housing",
                additionalInformation: "If my place of work provides housing, it is clean and comfortable. I am able to cook and socialize without too many regulations."
            },
            {
                questionNumber: 21,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "What is your gender?",
                additionalInformation: "/"
            },
            {
                questionNumber: 22,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "What is yor age?",
                additionalInformation: "/"
            },
            {
                questionNumber: 23,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "In which position are you working?",
                additionalInformation: "/"
            },
            {
                questionNumber: 24,
                questionIcon: "person_pin",
                questionCategory: "General Information",
                questionTitle: "Please use this text box to explain any of your answers here. We would like to hear your feedback about how you feel at work.",
                additionalInformation: "Please be aware that if you would like to make a complaint anonymously or raise a problem that you do not feel comfortable raising with a manager, you can do so by clicking here. This link will bring you to Vaude’s complaint mechanism system that can provide you with resources and options that can help."
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