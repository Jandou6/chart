<template>
  <div class="chart-line">

  </div>
</template>

<script>
import './index.scss';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
import { get_data } from './model';
export default {
  data() {
    return {
      chart: undefined,
    }
  },
  mounted () {
    this.init_chart();
  },
  methods: {
    init_chart: function() {
      this.chart = echarts.init(document.querySelector('.chart-line'));
      get_data(this.$route.params.name, (option) => {this.chart.setOption(option);});
      
    }
  }
}
</script>

<style>

</style>
