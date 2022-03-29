import {createRouter, createWebHashHistory} from 'vue-router';
import UserLoginPage from "@/components/user/LoginPage";
import UserForgetPassword from "@/components/user/ForgetPassword";
import UserRegistrationPage from "@/components/user/RegistrationPage";
import UserRegistrationSuccess from "@/components/user/RegistrationSuccess";
import DashboardHome from "@/components/DashboardHome";
import UserIndex from "@/components/UserIndex";
import UsersComponent from "@/components/UsersComponent";
import SurveysComponent from "@/components/SurveysComponent";
import QuestionsComponent from "@/components/QuestionsComponent";
import FeedbacksComponent from "@/components/FeedbacksComponent";


const routes = [

    {
        path: '/',
        name: 'home',
        component: DashboardHome,
        meta: {requiresAuth: true}
    },
    {
        path: '/users/component',
        name: 'UsersComponent',
        component: UsersComponent
    },
    {
        path: '/surveys',
        name: 'SurveysComponent',
        component: SurveysComponent
    },

    {
        path: '/questions',
        name: 'QuestionsComponent',
        component: QuestionsComponent
    },

    {
        path: '/feedbacks',
        name: 'FeedbacksComponent',
        component: FeedbacksComponent
    },


    {
        path: '/user',
        name: 'users',
        component: UserIndex,
        children: [
            {
                path: 'login',
                name: 'userLoginPage',
                component: UserLoginPage
            },
            {
                path: 'forget-password',
                name: 'userForgetPassword',
                component: UserForgetPassword
            },
            {
                path: 'register',
                name: 'userRegistrationPage',
                component: UserRegistrationPage
            },
            {
                path: '/registration-success',
                name: 'userRegistrationSuccess',
                component: UserRegistrationSuccess
            }
        ],
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const session = localStorage.getItem('session');
    if (to.meta.requiresAuth && !session) {
        return next({name: 'userLoginPage'});
    }

    return next();
});


export default router;
