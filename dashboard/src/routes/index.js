import {createRouter, createWebHashHistory} from 'vue-router';
import LoginForm from "@/components/LoginForm";
import DashboardPage from "@/components/DashboardPage";
import RegisterForm from "@/components/RegisterForm";


const routes = [
    {
        path: '/',
        name: 'home',
        component: LoginForm
    },
    {
        path: '/login',
        name: 'login',
        component: LoginForm
    },
    {
        path: '/dashboardPage',
        name: 'dashboard',
        component: DashboardPage
    },
    {
        path: '/registerForm',
        name: 'registration',
        component: RegisterForm
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
