import {createRouter, createWebHashHistory} from 'vue-router';
import LoginForm from "@/components/LoginForm";
import DashboardPage from "@/components/DashboardPage";
import RegisterForm from "@/components/OldRegisterForm";
import LandingPage from "@/components/LandingPage";
import ForgetPasswordForm from "@/components/ForgetPasswordForm";


const routes = [

    {
        path: '/',
        name: 'home',
        component: LoginForm
    },
    {
        path: '/landingPage',
        name: 'landingPage',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginForm
    },
    {
        path: '/forget-password',
        name: 'forget_password',
        component: ForgetPasswordForm
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
