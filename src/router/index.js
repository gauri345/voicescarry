import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '@/views/LandingPage';
import HomePage from "@/views/HomePage";
import SurveyPage from "@/views/SurveyPage";
import ComplaintPage from "@/views/ComplaintPage";
import SurveyEntryPage from "@/views/SurveyEntryPage";

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
        component: HomePage
    },
    {
        path: "/question/information",
        name: "SurveyEntryPage",
        component: SurveyEntryPage
    },
    {
        path: "/question/:number",
        name: "SurveyPage",
        component: SurveyPage
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
    i18n.locale = localStorage.getItem('language') || 'en'
    return next()
})

export default router;
