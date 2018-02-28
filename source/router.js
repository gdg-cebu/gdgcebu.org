import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [ {
    path: '/',
    component: () => import(/* webpackChunkName: 'landing-page' */ './components/landing-page.vue'),
    name: 'landing-page'
}, {
    path: '/events',
    component: () => import(/* webpackChunkName: 'events-page' */ './components/events-page.vue'),
    name: 'events-page'
}, {
    path: '/team',
    component: () => import(/* webpackChunkName: 'team-page' */ './components/team-page.vue'),
    name: 'team-page'
} ];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
