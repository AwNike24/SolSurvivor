import { createRouter, createWebHistory } from "vue-router";
import ApplicationLayout from "../components/layouts/ApplicationLayout";
import MainRoutes from "./main";

const routes = [
  {
    path: "/",
    component: ApplicationLayout,
    children: [...MainRoutes],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
