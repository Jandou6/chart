<template>
  <div class="wrap">
    <div class="chart-line"></div>
    <loading :show="show_loading"></loading>
  </div>
</template>

<script>
import './index.scss';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend'); //visualMap
require('echarts/lib/component/visualMap');
import { get_data } from './model';
import loading from '../../common/loading';

export default {
  data() {
    return {
      chart: undefined,
      show_loading: true,
    }
  },
  mounted () {
    this.show_loading = true;
    this.init_chart();
  },
  components: {
    loading,
  },
  methods: {
    init_chart: function() {
      this.chart = echarts.init(document.querySelector('.chart-line'));
      get_data(this.$route.params.name, (option) => {
        this.chart.setOption(option);
        this.show_loading = false;
      });
    }
  }
  
}
</script>

<style>

</style>
