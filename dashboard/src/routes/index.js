import {createRouter, createWebHashHistory} from 'vue-router';
import UserLoginPage from "@/components/user/LoginPage";
import UserForgetPassword from "@/components/user/ForgetPassword";
import UserRegistrationPage from "@/components/user/RegistrationPage";
import UserRegistrationSuccess from "@/components/user/RegistrationSuccess";
import DashboardHome from "@/components/home/DashboardHome";
import UserIndex from "@/components/user/UserIndex";
import UsersComponent from "@/components/user/UsersComponent";
import SurveysComponent from "@/components/survey/SurveysComponent";
import QuestionComponent from "@/components/question/QuestionComponent";
import QuestionForm from "@/components/question/QuestionForm";
import FeedbacksComponent from "@/components/feedback/FeedbacksComponent";
import AdminIndex from "@/components/admin/AdminIndex";
import QuestionList from "@/components/question/QuestionList";
import SurveyList from "@/components/survey/SurveyList";
import SurveyAnswerList from "@/components/survey/SurveyAnswerList";
import FactoryComponent from "@/components/factory/FactoryComponent";
import FactoryList from "@/components/factory/FactoryList";
import FactoryForm from "@/components/factory/FactoryForm";

const routes = [
    {
        path: '/',
        name: 'home',
        component: DashboardHome,
        meta: {requiresAuth: true},

    },
    {
        path: '/admin',
        component: AdminIndex,
        name: 'adminHome',
        meta: {requiresAuth: true},
        children: [
            {
                path: '/surveys',
                name: 'SurveysComponent',
                component: SurveysComponent,
                children: [
                    {
                        path: '',
                        name: 'SurveyList',
                        component: SurveyList
                    },
                    {
                        path: 'answers/survey-code=:surveyCode',
                        name: 'SurveyAnswerList',
                        component: SurveyAnswerList
                    },
                ]
            },
            {
                path: '/question/',
                name: 'QuestionComponent',
                component: QuestionComponent,
                children: [
                    {
                        path: '',
                        name: 'QuestionList',
                        component: QuestionList
                    },
                    {
                        path: 'form/id=:id?',
                        name: 'QuestionForm',
                        component: QuestionForm
                    }
                ]
            },
            {
                path: '/feedbacks',
                name: 'FeedbacksComponent',
                component: FeedbacksComponent,
            },
            {
                path: '/users',
                name: 'UsersComponent',
                component: UsersComponent
            },
            {
                path: '/factory/',
                name: 'FactoryComponent',
                component: FactoryComponent,
                children: [
                    {
                        path: '',
                        name: 'FactoryList',
                        component: FactoryList
                    },
                    {
                        path: 'form/id=:id?',
                        name: 'FactoryForm',
                        component: FactoryForm
                    }
                ]
            }
        ]
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
