import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/login',
                component: () => import('../views/Login.vue')
            },
            {
                path: '/admin',
                component: () => import('../views/Admin.vue')
            },
                        {
                path: '/settings',
                component: () => import('../views/Settings.vue')
            },

        ]
    })

    export default router