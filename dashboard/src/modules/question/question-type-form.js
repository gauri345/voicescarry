import ApiConfig from "@/config/ApiConfig";
import axios from "axios";
import router from "@/routes";

export default {
    state: {
        question: null,
        answer: null,
    },
    actions: {
        async saveQuestionsType({state, dispatch}) {
            try {
                const dataToStore = {
                    questionType: state.question,
                    answerValues: state.answer,
                };
                console.log('test')
                const config = {
                    method: 'post',
                    url: `${ApiConfig.API_BASE_URL}/question-type/`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: dataToStore
                };
                await axios(config);

                await router.push("/question-type/");
                dispatch('showInfo', "questions type and answers type successfully added", {root: true});
            } catch (error) {
                dispatch('showError', "Failed saving questions type in database.", {root: true});
            }
        }
    },
    mutations: {
    },
    getters: {
        question: (state) => state.question,
        answer: (state) => state.answer
    }
}