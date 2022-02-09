import {createStore} from "vuex";
import Survey from "@/modules/survey";
import Landingpage from "@/modules/landingpage";
import Application from "@/modules/application";
import SurveyAnswer from "@/modules/survey-answer";

const store = createStore({
    modules: {
        application: Application,
        survey: Survey,
        surveyAnswer: SurveyAnswer,
        landingpage: Landingpage
    }
});

export default store;
