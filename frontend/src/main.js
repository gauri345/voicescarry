import {createApp} from 'vue'
import App from './App.vue'

import 'material-icons/iconfont/material-icons.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './router'
import store from "@/store";

import {createI18n} from "vue-i18n";
import fetchTranslations from "@/lang";

const initApp = async () => {

    const messages = await fetchTranslations();

    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
    }

    const i18n = createI18n({
        locale: localStorage.getItem('language') || 'en',
        fallbackLocale: 'en',
        globalInjection: true,
        messages: messages
    });

    createApp(App)
        .use(router)
        .use(store)
        .use(i18n)
        .mount('#app')

    return messages;
};

Promise.resolve(initApp());
