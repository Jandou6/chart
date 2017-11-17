<template>
  <div class="chart-cross">

  </div>
</template>

<script>
import './index.scss';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/scatter');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

import {option} from './model';
export default {
  mounted () {
    this.init_chart();
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-cross'));
      myChart.setOption(option);
      myChart.on('click', function (params) {
          // 控制台打印数据的名称
        console.log(params);
      });
    }
  }
}
</script>
