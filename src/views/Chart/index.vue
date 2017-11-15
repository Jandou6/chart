<template> 
  <div>
    {{content}}
  </div>
</template>

<script>
  import './index.scss';
  export default {
    data() {
      return {
        content: '第二页'
      }
    }
  }
</script>
<style >
  * {
    color: #f00;
  }
</style>

