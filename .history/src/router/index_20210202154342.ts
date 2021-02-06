import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Index from '@/views/index/index.vue';
import Dashboard from '@/views/Dashboard/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
