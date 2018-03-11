import Vue from 'vue';
import Router from 'vue-router';
import Quiz from '@/components/Quiz';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/start',
      name: 'Quiz',
      component: Quiz,
    },
  ],
});
