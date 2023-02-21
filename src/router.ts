import { createRouter, createWebHistory } from 'vue-router';
import FakeDataView from './components/FakeDataView.vue';
import UsefulLinks from './components/UsefulLinks.vue';

const routes = [
  {
    path: '/',
    component: UsefulLinks,
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