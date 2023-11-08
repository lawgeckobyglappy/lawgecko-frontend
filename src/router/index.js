import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/auth/SignUp.vue";
import SignIn from "../views/auth/SignIn.vue";
import VerifyLink from "../views/auth/VerifyLink.vue"
import ForumView from "../views/ForumView.vue";
import store from "@/store/index";
import AdminPage from "../views/admin/AdminPage.vue"
import SubAdmin from "../views/admin/SubAdmin.vue"
import Dashboard from "../views/admin/DashboardPage.vue"
import Resource from "../views/admin/ResourcePage.vue"
import AdminSignUp from "../views/admin/auth/SignUp.vue"
import OtpPage from "../views/admin/auth/OtpPage.vue";
import ProfileSettings from "../views/admin/ProfileSettings.vue"

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
    props: (route) => ({ id: route.query.id }),
  },
  {
    path: "/forum",
    name: "forum",
    component: ForumView,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/new/info",
    name: "admin-signup",
    component: AdminSignUp,
  },
  {
    path: "/admin/otp",
    name: "otp",
    component: OtpPage,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "resource",
        component: Resource
      },
      {
        path: "subAdmin",
        component: SubAdmin
      },
      {
        path: "profile",
        component: ProfileSettings
      }
    ],
    beforeEnter: guardAdminRoute
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

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = store.state.isAuthenticated;
//   if (!isAuthenticated && to.meta.requiresAuth) {
//     next({
//       name: "sign-in",
//     });
//   } else {
//     next();
//   }
// });


function guardAdminRoute(){
  let user = localStorage.getItem("currentUser");
  user = JSON.parse(user)
  if(user?.role !== "super-admin"){
    return { path: "/signin" };
  }
}

export default router;
