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

import {get_data} from './model';
export default {
  mounted () {
    this.init_chart();
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-cross'));
      
       get_data((option) => {
         console.log(option);
         myChart.setOption(option);
       });
      myChart.on('click', function (params) {
          // 控制台打印数据的名称
        console.log(params);
      });
    }
  }
}
</script>
