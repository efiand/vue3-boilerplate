import IndexPage from "@/pages/IndexPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: IndexPage,
      name: "index",
      path: "/",
    },
  ],
});

export default router;
