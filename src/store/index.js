import {createStore} from "vuex";
import Question from "@/modules/question";
import Landingpage from "@/modules/landingpage";
import Application from "@/modules/application";

const store = createStore({
    modules: {
        application: Application,
        question: Question,
        landingpage: Landingpage
    }
});

export default store;
