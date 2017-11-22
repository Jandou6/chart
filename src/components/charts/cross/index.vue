<template>
  <div class="wrap">
    <loading :show="show_loading"></loading>
    <div class="chart-cross"></div>
  </div>
</template>

<script>
import './index.scss';
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/scatter');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import loading from '../../common/loading';
import { get_data, get_local_data, change_company } from './model';
export default {
  data() {
    return {
      show_loading: true,
    }
  },
  mounted () {
    this.show_loading = true;
    this.init_chart();
  },
  props: {
    change_company: {
      type: Function,
    },
    name: {
      type: String,
    }
  },
  components: {
    loading,
  },
  beforeUpdate() {
    if (this.name && this.$route.name === 'chart') {
      const option = change_company(this.name);
      const myChart = echarts.init(document.querySelector('.chart-cross'));
      myChart.setOption(option);
    }
  },
  methods: {
    init_chart: function() {
      const myChart = echarts.init(document.querySelector('.chart-cross'));
      const name = this.$route.params.name;
      if (name && this.$route.name !== 'cross') {
        get_local_data(name, (option) => {
          myChart.setOption(option);
          this.show_loading = false;
        });
      } else {
        get_data((option) => {
          myChart.setOption(option);
          this.show_loading = false;
        });
      }
      myChart.on('click', (params) => {
        this.change_company(params.seriesName);
      });
    }
  }
}
</script>
