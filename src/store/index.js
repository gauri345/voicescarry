import {createStore} from "vuex";
import Survey from "@/modules/survey";
import Landingpage from "@/modules/landingpage";
import Application from "@/modules/application";

const store = createStore({
    modules: {
        application: Application,
        survey: Survey,
        landingpage: Landingpage
    }
});

export default store;
