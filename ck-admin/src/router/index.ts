import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store";

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: Login
    },
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            title: "系统首页",
        },
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: "系统首页",
                },
                component: () => import("../views/Dashboard.vue"),
            },
            /*{
                path: '/case',
                name: 'case',
                meta: {
                    title: '遥感案例',
                },
                component: () => import('../views/Case.vue.bak')
            },
            {
                path: '/shoppingCart',
                name: 'shoppingCart',
                meta: {
                    title: '购物车',
                },
                component: () => import('../views/ShoppingCart.vue.bak')
            },
            {
                path: '/fileUpload',
                name: 'fileUpload',
                meta: {
                    title: '案例上传',
                },
                component: () => import('../views/FileUpload.vue.bak')
            },
            {
                path: '/orderCheck',
                name: 'orderCheck',
                meta: {
                    title: '订单审核',
                },
                component: () => import('../views/OrderCheck.vue.bak')
            },
            {
                path: '/user',
                name: 'User',
                meta: {
                    title: '用户管理',
                },
                component: () => import('../views/User.vue.bak')
            }*/
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// @ts-ignore
router.beforeEach((to, from, next) => {
    let token = store.state.token;
    if (to.path === '/login') {
        return next()
    } else {
        if (!token) {
            return next('/login')
        } else {
            next()
        }
    }
})

export default router;
