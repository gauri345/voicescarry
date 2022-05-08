import {createStore} from 'vuex'

import login from '../modules/user/login';
import registration from "@/modules/user/registration";
import feedbackList from "@/modules/feedback/feedback-list";


export default createStore({
    modules: {
        login,
        registration,
        feedbackList
    }
});
