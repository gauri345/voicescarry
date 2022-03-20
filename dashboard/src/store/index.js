import {createStore} from 'vuex'

import login from '../modules/login';
import registration from "@/modules/registration";


export default createStore({
    modules: {
        login: login,
        registration:registration,
    }
});
