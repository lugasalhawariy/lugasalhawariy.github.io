import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/project/:id",
      name: "project-detail",
      component: ProjectDetail,
    },

    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;