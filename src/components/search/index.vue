<template>
  <div class="search-input-wrap">
    <input class="compay-name-input" ref="input"  v-model='input_data'/>
    <div class="enter-btn-wrap vh-center">
      <button class="enter-btn " @click="btn_click">More</button>
    </div>
    <div class="keyword-list-wrap" :style="{display: keyword_list.length > 0 ? '': 'none'}">
      <ul class="keyword-list">
        <template v-for="(item, index) in keyword_list">
          <li :key='index' >
            <router-link :to="{ name: 'chart', params: { name: item.CompanyName}}">
              {{item.CompanyName}}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import './index.scss';
import { get_keyworod } from './model';
export default {
  data() {
    return {
      input_data: '',
      keyword_list: [],
    }
  },
  watch: {
    input_data: function() {
      if (this.input_data !== '') {
        get_keyworod(this.input_data, this.set_keyword_list);
      } else {
        this.set_keyword_list();
      }
    }
  },
  mounted () {
    this.$refs.input.focus();
  },
  methods: {
    btn_click: function() {
      this.$router.push({ name: 'chart', params: { name: this.input_data }})
    },
    set_keyword_list: function(keyword_list = []) {
      this.keyword_list = keyword_list;
    }
  }
};
</script>

<style>

</style>
