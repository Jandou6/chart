<template> 
  <wrap>
    <div id="view-search" class="body">
      <header-component></header-component>
      <div class="mian-body vh-center">
        <div class="content-wrap vh-center">
          <h4 class="title vh-center">I want to know more about.</h4>
          <input class="compay-name-input" ref="input"  v-model='input_data'/>
          <div class="enter-btn-wrap vh-center">
            <button class="enter-btn " @click="btn_click">More</button>
          </div>
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
export default {
  data() {
    return {
      input_data: ''
    }
  },
  components: {
    wrap,
    headerComponent,
    footerComponent
  },
  mounted () {
    this.$refs.input.focus();
  },
  methods: {
    btn_click: function() {
      this.$router.push({ name: 'chart', params: { name: this.input_data }})
    }
  }
}
</script>