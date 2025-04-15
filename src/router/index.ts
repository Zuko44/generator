import { createRouter, createWebHistory } from 'vue-router';
import DemoFormOne from '../pages/DemoFormOne.vue';

const routes = [
  { path: '/', component: DemoFormOne }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});