import {createRouter, createWebHistory} from "vue-router";
import TasksPage from "../modules/tasks/pages/TasksPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TasksPage,
    },
  ]
})
