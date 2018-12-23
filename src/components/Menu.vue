<template>
  <div class="hello">
  <el-menu
  :default-active="activeIndex2"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">SQL Generator</el-menu-item>
   <el-menu-item index="4"><a href="https://github.com/bestony/sqlgenerator.pro" target="_blank">Source Code</a></el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
