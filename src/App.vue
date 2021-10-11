<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      };
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    created() {

    },
    computed: {

    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function() {
          this.isRouterAlive = true;
        });
      }
    }
  }
</script>

<style>
  @import './assets/css/common.css';
  @import './assets/css/element-ui.css';
  @import './assets/css/vux-ui.css';

  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "SF Pro Text", "SF UI Text", "Helvetica Neue", Helvetica, "Microsoft YaHei", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  p,
  div,
  span {
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: "Barlow";
    src: url("/static/DIN/Barlow-Black.ttf")
  }
  .Barlow{
  	font-family: 'Barlow' !important;
  }
</style>
