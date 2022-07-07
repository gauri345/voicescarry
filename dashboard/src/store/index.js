import {createStore} from 'vuex'

import login from '../modules/user/login';
import registration from "@/modules/user/registration";
import feedbackList from "@/modules/feedback/feedback-list";
import questionList from "@/modules/question/question-list";
import questionForm from "@/modules/question/question-form";
import userList from "@/modules/user/user-list";
import alertBox from "@/modules/util/alert-box";

export default createStore({
    modules: {
        login,
        registration,
        feedbackList,
        questionList,
        questionForm,
        userList,
        alertBox
    }
});
