<template> 
  <wrap>
    <div class="body">
      <header-component></header-component>
      <div class="mian-body vh-center">
        <h4 id="welcome-title"></h4>
      </div>
      <footer-component></footer-component>
    </div>
  </wrap>
</template>

<script>
import Typed from 'typed.js';

import * as style from './index.scss';
import headerComponent from '../../components/common/header';
import wrap from '../../components/common/bg_wrap';
import footerComponent from '../../components/common/footer';
export default {
  data() {
    return {
      content: '首页'
    }
  },
  components: {
    wrap,
    headerComponent,
    footerComponent
  },
  mounted () {
    var options = {
      strings: ['Welcome', `<a href="#/search" class="link-to-search">Click Here</a>`],
      showCursor: false,
      typeSpeed: 80
    }
  const typed = new Typed('#welcome-title', options);
  }
}
</script>