import {createStore} from 'vuex'

import login from '../modules/user/login';
import registration from "@/modules/user/registration";
import feedbackList from "@/modules/feedback/feedback-list";
import questionList from "@/modules/question/question-list";
import userList from "@/modules/user/user-list";

export default createStore({
    modules: {
        login,
        registration,
        feedbackList,
        questionList,
        userList
    }
});
