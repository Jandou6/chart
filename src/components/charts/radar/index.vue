<template>
  <div class="wrap">
    <div class="chart-radar"></div>
    <loading :show="show_loading"></loading>
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
  data() {
    return {
      show_loading: true,
    }
  },
  props: {
    name: {
      type: String,
    }
  },
  mounted () {
    get_max_data(this.$route.params.name, this.init_chart);
  },
  beforeUpdate() {
    get_max_data(this.name || this.$route.params.name, this.init_chart);
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-radar'));
      myChart.setOption(option);
      this.show_loading = false;
    },
  },
  components: {
    loading,
  }
}
</script>

<style>

</style>
