import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Index from '@/views/index/index.vue';
import Dashboard from '@/views/Dashboard/index.vue';
import Companies from '@/views/Companies/index.vue';
import Users from '@/views/Users/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
