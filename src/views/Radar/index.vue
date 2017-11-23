<template>
  <div id="view-chart">
    <header-component></header-component>
    <div class="main-body">
      <chart-radar></chart-radar>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import './index.scss';
import chartRadar from '../../components/charts/radar';
import headerComponent from '../../components/common/header';
import footerComponent from '../../components/common/footer';
export default {
  components: {
    headerComponent,
    footerComponent,
    chartRadar,
  }
}
</script>

