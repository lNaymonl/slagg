import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import User from '@/libs/user.lib';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name != "Login" && User.isExpired()) next({ name: "Login" });
  else if (to.name == "Login" && !User.isExpired()) next({ name: "Home" });
  else next();
});

export default router;
