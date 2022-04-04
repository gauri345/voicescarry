import {createStore} from 'vuex'

import login from '../modules/user/login';
import registration from "@/modules/user/registration";


export default createStore({
    modules: {
        login: login,
        registration:registration,

    }
});
