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

import {get_data, get_local_data} from './model';
export default {
  mounted () {
    this.init_chart();
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-cross'));
      const name = this.$route.params.name;
      if (name && this.$route.name !== 'cross') {
        get_local_data(name, (option) => {
          myChart.setOption(option);
        });
      } else {
        get_data((option) => {
          myChart.setOption(option);
        });
      }
      
      myChart.on('click', function (params) {
        console.log(params);
      });
    }
  }
}
</script>
