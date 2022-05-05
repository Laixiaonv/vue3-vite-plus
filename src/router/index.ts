import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@layouts/index.vue"
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: layout,
    children: [
      {
        path: '/home',
        component:() => import("../views/home/index.vue"),
      }
    ]
  },
];
const router = createRouter({
  history,
  routes
})
export default router