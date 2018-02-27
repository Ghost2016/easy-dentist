<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
// 定义全局样式
@import './style/common.less';

body {
  background-color: #fbf9fe;
}
#app{
  height:100%;
}
</style>
