import Vue from 'vue';
import VueRouter from 'vue-router';
import zhenti from './components/index.vue';
import zhuti from './components/Main/index.vue';

Vue.use(VueRouter);

//配置小路由
const router = [{
    path: '/',
    component: zhenti,
    redirect: '/zhuti',
    children: [{
        path: '/city',
        component: () => {
            return import('./components/city/index.vue');
        },
    }, {
        path: '/zhuti',
        component: () => {
            return import('./components/Main/index.vue');
        }
    }, {
        path: '/Product',
        component: () => {
            return import('./components/Product/index.vue');
        }
    }]
}, {
    path:'/SignIn',
    component:()=>{
        return import('./components/SignUp/SignIn.vue');
    }
},{
    path:'/register',
    component:()=>{
        return import('./components/SignUp/register.vue');
    }
}];

const Router = new VueRouter({
    routes: router,
    mode: 'history',
});

export default Router;