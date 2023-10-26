import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import VerifyLink from "../views/VerifyLink.vue";
import ForumView from "../views/ForumView.vue";
import AdminLogin from "../views/AdminLogin.vue";
import store from "@/store/index";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/adminlogin",
    name: "admin-login",
    component: AdminLogin,
  },
  {
    path: "/verify-link",
    name: "verify-link",
    component: VerifyLink,
    props: (route) => ({ id: route.query.id }),
  },
  {
    path: "/forum",
    name: "forum",
    component: ForumView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const isAuthenticated = store.state.isAuthenticated;
  if (!isAuthenticated && to.meta.requiresAuth) {
    return { name: "sign-in" };
  }
});

export default router;
