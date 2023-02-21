import { createRouter, createWebHistory } from 'vue-router';
import FakeDataView from './components/FakeDataView.vue';
import UsefulLinks from './components/UsefulLinks.vue';
import QuizzezLanding from './components/QuizzezLanding.vue';
import SingleQuizLanding from './components/SingleQuizLanding.vue';

const routes = [
  {
    path: '/',
    component: QuizzezLanding,
  },
  {
    path: '/quizz/:id',
    component: SingleQuizLanding,
  },
  {
    path: '/documentation',
    component: UsefulLinks,
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