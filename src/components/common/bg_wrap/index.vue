<template>
  <div class="bg-canvas-wrap">
    <div class="canvas-wrap">
      <canvas id="canv"></canvas>
    </div>
    <slot></slot>
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
