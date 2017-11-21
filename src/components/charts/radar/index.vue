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
import loading from '../../common/loading';

import { option, get_max_data } from './model';
export default {
  mounted () {
    get_max_data(this.$route.params.name, this.init_chart);
    // this.init_chart();
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-radar'));
      console.log(option);
      myChart.setOption(option);
    }
  },
  components: {
    loading,
  }
}
</script>

<style>

</style>
