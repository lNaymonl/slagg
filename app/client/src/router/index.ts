import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import User from '@/libs/user.lib';

const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
              path: "/login",
              name: "Login",
              component: LoginView
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

router.beforeEach((to, from, next) => {
  if (to.name != "Login" && User.isExpired()) next({ name: "Login" });
  else if (to.name == "Login" && !User.isExpired()) next({ name: "Home" });
  else next();
});

export default router;
