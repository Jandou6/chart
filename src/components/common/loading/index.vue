<template>
  <div class="loading-wrap vh-center" :style="{display: show ? '' : 'none'}">
    <moon-loader></moon-loader>
  </div>
</template>

<script>
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import './index.scss';
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    }
  },
  components: {
     MoonLoader,
  }
}
</script>

<style>

</style>
