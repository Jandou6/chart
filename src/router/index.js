import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chart from '@/views/Chart';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'chart',
      component: Chart
    },
    {
      path: '/test_2',
      name: 'HelloWorld2',
      component: HelloWorld
    },
  ]
})
