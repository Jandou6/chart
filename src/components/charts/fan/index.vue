<template>
  <div class="chart-fan">

  </div>
</template>

<script>
import './index.scss';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import { option } from './model';
export default {
  mounted () {
    this.init_chart();
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-fan'));
      myChart.setOption(option);
    }
  }
}
</script>
