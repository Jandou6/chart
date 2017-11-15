import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/views/Search';
import Index from '@/views/Index';
import Chart from '@/views/Chart';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/chart/:name',
      name: 'chart',
      component: Chart
    },
  ]
})
