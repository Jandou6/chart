<template>
  <div id="view-chart">
    <header-component></header-component>
    <div class="main-body">
      <chart-cross></chart-cross>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import './index.scss';
import chartCross from '../../components/charts/cross';
import headerComponent from '../../components/common/header';
import footerComponent from '../../components/common/footer';
export default {
  components: {
    headerComponent,
    footerComponent,
    chartCross,
  }
}
</script>

