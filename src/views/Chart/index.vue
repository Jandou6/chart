<template>
  <div id="view-chart">
    <header-component></header-component>
    <div class="main-body">
      <div class="left-area">
        <div class="small-chart-wrap">
          <chart-bar></chart-bar>
        </div>
        <div class="small-chart-wrap">
          <chart-line></chart-line>
        </div>
        <div class="small-chart-wrap">
          <chart-fan></chart-fan>
        </div>
        <div class="small-chart-wrap">
          <chart-radar></chart-radar>
        </div>
      </div>
      <div class="right-area">
        <chart-cross></chart-cross>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import './index.scss';
import chartBar from '../../components/charts/bar';
import chartLine from '../../components/charts/line';
import chartFan from '../../components/charts/fan';
import chartCross from '../../components/charts/cross';
import chartRadar from '../../components/charts/radar';
import headerComponent from '../../components/common/header';
import footerComponent from '../../components/common/footer';
export default {
  components: {
    headerComponent,
    chartBar,
    footerComponent,
    chartLine,
    chartFan,
    chartCross,
    chartRadar,
  }
}
</script>

