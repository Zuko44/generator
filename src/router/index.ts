import { createRouter, createWebHistory } from 'vue-router';
import DemoFormOne from '../pages/DemoFormOne.vue';
import DemoFormTwo from '../pages/DemoFormTwo.vue';

const routes = [
  { path: '/', component: DemoFormOne },
  {
    path: '/custom',
    name: 'DemoFormTwo',
    component: DemoFormTwo,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});