import { createRouter, createWebHistory } from "vue-router";
import Model from "./components/Model.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "model", path: "/models/:id", component: Model, props: true },
  ],
});
export default router;
