import vi from './translations/vi';
import en from './translations/en';

import {createI18n} from "vue-i18n/index";

export default createI18n({
    locale: localStorage.getItem('language') || 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        vi,
        en
    }
});