<template>
  <div id="view-chart">
    <header-component></header-component>
    <div class="main-body">
      <chart-line></chart-line>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import './index.scss';
import chartLine from '../../components/charts/line';
import headerComponent from '../../components/common/header';
import footerComponent from '../../components/common/footer';
export default {
  components: {
    headerComponent,
    footerComponent,
    chartLine,
  }
}
</script>

