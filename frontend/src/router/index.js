import {createRouter, createWebHistory} from 'vue-router'
import LocalStorage from "@/util/local_storage";

import LandingPage from '@/views/Landingpage';
//Updated upstream:frontend/src/router/home.js;
import Homepage from "@/views/Homepage";
import HomePage from "@/views/Homepage";
//Stashed changes:src/router/home.js;
import SurveyPage from "@/views/SurveyPage";
import ComplaintPage from "@/views/ComplaintPage";
import SurveyEntryPage from "@/views/SurveyEntryPage";
import SurveyExplanationPage from "@/views/SurveyExplanationPage";
import SurveyEndingPage from "@/views/SurveyEndingPage";

import i18n from '../lang';

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/homepage",
        name: "HomePage",
        component: Homepage
    },
    {
        path: "/question/information",
        name: "SurveyEntryPage",
        component: SurveyEntryPage
    },
    {
        path: "/question/explanation",
        name: "SurveyExplanationPage",
        component: SurveyExplanationPage
    },
    {
        path: "/question/:number",
        name: "SurveyPage",
        component: SurveyPage
    },
    {
        path: "/question/end",
        name: "SurveyEndingPage",
        component: SurveyEndingPage
    },
    {
        path: "/complaint",
        name: "ComplaintPage",
        component: ComplaintPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
});

router.beforeEach((to, from, next) => {
    i18n.locale = LocalStorage.get('language') || 'en'

    const nonSurveyPages = ['SurveyPage', 'HomePage', 'ComplaintPage', 'SurveyExplanationPage', 'SurveyEntryPage', 'SurveyEndingPage'];

    if (nonSurveyPages.includes(to.name) && null === LocalStorage.get('survey')) {
        return next({name: 'LandingPage'});
    }

    return next();
})

export default router;
