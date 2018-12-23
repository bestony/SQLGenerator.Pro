<template>
  <div id="app">
  <el-container>
    <el-header class="sql-header"><Menu></Menu></el-header>
    <el-main><CreateUser></CreateUser></el-main>
    <el-footer>Designed By <a target="_blank" href="https://www.ixiqin.com">@bestony</a></el-footer>
  </el-container>
  </div>
</template>

<script>

import Menu from "./components/Menu.vue";
import CreateUser from "./components/sql/create-user.vue";

export default {
  name: 'app',
  components: {
    Menu,CreateUser
  }
}
</script>

<style>
body{
  margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sql-header{
  padding:0px 0px !important;
}
</style>
