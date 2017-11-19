<template> 
  <wrap>
    <div class="body">
      <header-component></header-component>
      <div class="mian-body vh-center">
        <ul class="content-list">
          <template v-for="(chart, index) in chart_list">
            <li :key="index" class="list-item-wrap">
              <div class="chart-item vh-center">
                <router-link :to="{ name: chart.link, params: { name:CompanyName}}">
                   {{chart.name}}
                </router-link>
              </div>
            </li>
          </template>
        </ul>
      </div>
      <footer-component></footer-component>
    </div>
  </wrap>
</template>

<script>
import Typed from 'typed.js';

import * as style from './index.scss';
import headerComponent from '../../components/common/header';
import wrap from '../../components/common/bg_wrap';
import footerComponent from '../../components/common/footer';
export default {
  data() {
    return {
      CompanyName: this.$route.params.name,
      chart_list: [
        {
          name: 'General',
          link: 'chart',
        },
        {
          name: '雷达图',
          link: 'radar',
        },
        {
          name: '价格折线图',
          link: 'line',
        },
        {
          name: '局部散点图',
          link: 'cross',
        },
        {
          name: '全局散点图',
          link: 'cross',
        }
      ]
    }
  },
  components: {
    wrap,
    headerComponent,
    footerComponent
  },
}
</script>