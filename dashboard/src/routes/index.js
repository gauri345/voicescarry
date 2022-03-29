import {createRouter, createWebHashHistory} from 'vue-router';
import LoginForm from "@/components/LoginForm";
import DashboardPage from "@/components/DashboardPage";



const routes = [
    {
     path: '/',
     component: LoginForm
    },
    {
        path: '/dashboardPage',
        component: DashboardPage
    }
];




const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
