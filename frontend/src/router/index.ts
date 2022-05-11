import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import QuestionView from "../views/QuestionView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Question",
    component: QuestionView,
  },
  {
    path: "/result",
    name: "Result",
    component: QuestionView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "/",
  routes,
});

export default router;
