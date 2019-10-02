import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '',
    component: () => import('./pages/Home.vue')
}, {
    path: '/team/',
    component: () => import('./pages/Team.vue')
}];

export default new VueRouter({
    routes,
    mode: 'history'
});
