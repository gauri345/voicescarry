import {createStore} from "vuex";
import Question from "@/modules/question";
import Landingpage from "@/modules/landingpage";

const store = createStore({
    modules: {
        question: Question,
        landingpage: Landingpage
    }
});

export default store;
