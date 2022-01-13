import {createStore} from "vuex";
import Question from "@/modules/question";

const store = createStore({
    modules: {
        question: Question
    }
});

export default store;
