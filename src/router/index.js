import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SignUp from "../views/auth/SignUp.vue"
import SignIn from "../views/auth/SignIn.vue"
import VerifyLink from "../views/auth/VerifyLink.vue"
import ForumView from "../views/ForumView.vue"
import AdminLogin from "../views/admin/auth/AdminLogin.vue"
import LoginEmail from "../views/auth/LoginEmail.vue"
import WelcomeEmail from "../views/auth/WelcomeEmail.vue"
import store from "@/store/index"
import AdminPage from "../views/admin/AdminPage.vue"
import SubAdmin from "../views/admin/SubAdmin.vue"
import Dashboard from "../views/admin/DashboardPage.vue"
import Resource from "../views/admin/ResourcePage.vue"
import AdminSignUp from "../views/admin/auth/SignUp.vue"

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
    path: "/verify-link",
    name: "verify-link",
    component: VerifyLink,
    props: route => ({ id: route.query.id }),
  },
  {
    path: "/forum",
    name: "forum",
    component: ForumView,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/signUp",
    name: "admin-signup",
    component: AdminSignUp,
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLogin,
  },
  {
    path: "/email",
    name: "login-email",
    component: LoginEmail,
  },
  {
    path: "/email/welcome",
    name: "welcome-email",
    component: WelcomeEmail,
  },

  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    children: [
      {
        path: "",
        component: Dashboard,
      },
      {
        path: "resource",
        component: Resource,
      },
      {
        path: "subAdmin",
        component: SubAdmin,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async to => {
  const isAuthenticated = store.state.isAuthenticated
  if (!isAuthenticated && to.meta.requiresAuth) {
    return { name: "sign-in" }
  }
})

export default router
