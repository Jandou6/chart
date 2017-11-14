<template> 
  <div>
    <wrap></wrap>
  </div>
</template>

<script>
  import * as style from './index.scss';
  import wrap from '../../components/common/bg_wrap';
  export default {
    data() {
      return {
        content: '首页'
      }
    },
    components: {
      wrap,
    }
  }
</script>