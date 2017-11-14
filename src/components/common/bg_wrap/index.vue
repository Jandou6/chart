<template>
  <div class="bg-canvas-wrap">
    <canvas id="canv"></canvas>
  </div>
</template>

<script>
  import './index.scss';
  import {init_canvas} from './model';
  export default{
    mounted () {
      init_canvas();
    }
  }
</script>
