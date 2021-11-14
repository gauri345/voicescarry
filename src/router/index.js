import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "@/views/Homepage";
import Question from "@/components/question/Question";

const routes = [
    {
        path: "/",
        name: 'Homepage',
        component: HomePage
    },
    {
        path: "/question/:number",
        name: "Question",
        component: Question
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
