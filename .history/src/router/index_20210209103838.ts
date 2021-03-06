import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '@/views/Dashboard/index.vue';
import Companies from '@/views/Companies/index.vue';
import Users from '@/views/Users/index.vue';
import Login from '@/views/Login/index.vue';
import SignUp from '@/views/SignUp/index.vue';
import CarrierOffers from '@/views/CarrierOffers/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/companies',
        name: 'Companies',
        component: Companies
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/carrier-offers',
        name: 'CarrierOffers',
        component: CarrierOffers
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
