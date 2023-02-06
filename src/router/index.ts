import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/age-error",
    name: "age-error",
    component: () => import("../views/AgeErrorView.vue"),
  },
  {
    path: "/package-selection",
    name: "package-selection",
    component: () => import("../views/PackageSelectionView.vue"),
  },
  {
    path: "/package-summary",
    name: "package-summary",
    component: () => import("../views/PackageSummaryView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
