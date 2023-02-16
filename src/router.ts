import FakeDataView from './components/FakeDataView.vue';
import HelloWorld from './components/HelloWorld.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: HelloWorld,
    alias: '/documentation',
  },
  {
    path: '/fake',
    component: FakeDataView,
  },
];


export default createRouter({
  history: createWebHistory(),
  routes,
})