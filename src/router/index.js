import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/views/Search';
import Index from '@/views/Index';
import Chart from '@/views/Chart';
import Line from '@/views/Line';
import Cross from '@/views/Cross';
import Radar from '@/views/Radar';
import ChartList from '@/views/ChartList';

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
    {
      path: '/line/:name',
      name: 'line',
      component: Line
    },
    {
      path: '/cross',
      name: 'cross',
      component: Cross
    },
    {
      path: '/radar',
      name: 'radar',
      component: Radar
    },
    {
      path: '/chartlist/:name',
      name: 'chartlist',
      component: ChartList
    },
    {
      path: '/local_cross/:name',
      name: 'local_cross',
      component: Cross
    }
  ]
})
