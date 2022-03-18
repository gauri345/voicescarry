import {createRouter, createWebHashHistory} from 'vue-router';
import LoginForm from "@/components/LoginForm";
import DashboardPage from "@/components/DashboardPage";
import RegisterForm from "@/components/RegisterForm";



const routes = [
    {
     path: '/',
     component: LoginForm
    },
    {
        path: '/dashboardPage',
        component: DashboardPage
    },
    {
        path: '/registerForm',
        component: RegisterForm
    }

];




const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
