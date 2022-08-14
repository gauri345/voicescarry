import {createApp} from 'vue'
import App from './App.vue'

import 'material-icons/iconfont/material-icons.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './router'
import store from "@/store";

import i18n from './lang';

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
