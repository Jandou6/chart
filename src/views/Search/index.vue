<template> 
  <wrap>
    <div id="view-search" class="body">
      <header-component></header-component>
      <div class="mian-body vh-center">
        <div class="content-wrap vh-center">
          <h4 class="title vh-center">I want to know more about.</h4>
          <input-search></input-search>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </wrap>
</template>

<script>
import * as style from './index.scss';
import headerComponent from '../../components/common/header';
import wrap from '../../components/common/bg_wrap';
import footerComponent from '../../components/common/footer';
import inputSearch from '../../components/search';
export default {
  components: {
    wrap,
    headerComponent,
    footerComponent,
    inputSearch,
  },
}
</script>