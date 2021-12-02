import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '@/views/Landingpage';
import HomePage from "@/views/Homepage";
import Question from "@/components/question/Question";
import Complaint from "@/components/complaint/Complaint";

import i18n from '../lang';

const routes = [
    {
        path: "/",
        name: 'Landingpage',
        component: LandingPage
    },
    {
        path: "/homepage",
        name: 'Homepage',
        component: HomePage
    },
    {
        path: "/question/:number",
        name: "Question",
        component: Question
    },
    {
        path: "/complaint",
        name: "Complaint",
        component: Complaint
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
