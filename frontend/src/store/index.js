import {createStore} from "vuex";
import Survey from "@/modules/survey";
import Landingpage from "@/modules/landingpage";
import Application from "@/modules/application";
import SurveyAnswer from "@/modules/survey-answer";
import FinishModal from "@/modules/finish-modal";

const store = createStore({
    modules: {
        application: Application,
        survey: Survey,
        surveyAnswer: SurveyAnswer,
        landingpage: Landingpage,
        finishModal: FinishModal
    }
});

export default store;
