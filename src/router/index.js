import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '@/views/Landingpage';
import HomePage from "@/views/Homepage";
import Question from "@/components/question/Question";
import Complaint from "@/components/complaint/Complaint";

import {i18n} from "../main";
import App from "@/App";

const routes = [
    {
        path: "/:lang",
        component: App,
        beforeEnter(to, from, next) {
            const lang = to.params.lang;
            if (!["en", "de"].includes(lang)) return next("en");
            if (i18n.locale !== lang) {
                i18n.locale = lang;
            }
            return next();
        },
        children: [
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
        ]
    },
    {
        path: "/:pathMatch(.*)",
        redirect: "/en"
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
