<template>
  <div id="view-chart">
    <header-component></header-component>
    <div class="main-body">
      <div class="left-area">
        <div class="small-chart-wrap">
          <chart-radar  :name="company_name"></chart-radar>
        </div>
        <div class="small-chart-wrap">
          <chart-line :name="company_name"></chart-line>
        </div>
      </div>
      <div class="right-area">
        <chart-cross :change_company="change_company" :name="company_name"></chart-cross>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import './index.scss';
import chartLine from '../../components/charts/line';
import chartCross from '../../components/charts/cross';
import chartRadar from '../../components/charts/radar';
import headerComponent from '../../components/common/header';
import footerComponent from '../../components/common/footer';
export default {
  components: {
    headerComponent,
    footerComponent,
    chartLine,
    chartCross,
    chartRadar,
  },
  data () {
    return {
      company_name: undefined,
    }
  },
  methods: {
    change_company: function(name) {
      this.company_name = name;
    }
  }
}
</script>

