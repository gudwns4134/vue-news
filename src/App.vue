<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view> <!-- url맞춰 다른 페이지가 나온다 -->
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body{
  margin:0;
  padding:0;
  }
</style>
