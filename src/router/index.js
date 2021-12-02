import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '@/views/Landingpage';
import HomePage from "@/views/Homepage";
import Question from "@/components/question/Question";
import Complaint from "@/components/complaint/Complaint";

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
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
