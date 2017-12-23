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
import { get_data, get_gbi_data } from './model';
import loading from '../../common/loading';

export default {
  data() {
    return {
      chart: undefined,
      show_loading: true,
    }
  },
  props: {
    name: {
      type: String,
    }
  },
  mounted () {
    this.show_loading = true;
    if(this.$route.name == 'gbi_line') {
      this.init_gbi_chart();
    } else {
      this.init_chart(this.$route.params.name);
    }
  },
  beforeUpdate() {
     if(this.$route.name == 'gbi_line') {
      this.init_gbi_chart();
    } else {
      this.init_chart(this.name || this.$route.params.name);
    }
  },
  components: {
    loading,
  },
  methods: {
    init_chart: function(name) {
      this.chart = echarts.init(document.querySelector('.chart-line'));
      get_data(name, (option) => {
        this.chart.setOption(option);
        this.show_loading = false;
      });
    },
    init_gbi_chart: function() {
      this.chart = echarts.init(document.querySelector('.chart-line'));
      get_gbi_data((option) => {
        this.chart.setOption(option);
        this.show_loading = false;
      });
    }
  }
  
}
</script>
