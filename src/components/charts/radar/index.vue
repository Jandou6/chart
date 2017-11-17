<template>
  <div class="chart-radar">

  </div>
</template>

<script>
import './index.scss';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/radar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

import { option } from './model';
export default {
  mounted () {
    this.init_chart();
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-radar'));
      myChart.setOption(option);
    }
  }
}
</script>

<style>

</style>
