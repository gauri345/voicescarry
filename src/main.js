import {createApp} from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'

import messages from './lang';

import {createI18n} from "vue-i18n";

export const i18n = createI18n({
    legacy: false, locale: 'en', fallbackLocale: 'en', globalInjection: true, messages: messages
});

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
