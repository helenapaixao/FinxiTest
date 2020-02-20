import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Teste from './components/Teste.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
  },
  {
    path:'/gif-details',
    name:'teste',
    component: Teste
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
