<template>
  <div>
    <h1>我的工作</h1>
    <group-title> 我的工作具体项 </group-title>
    <grid>
      <grid-item v-for="i in 4" :key="i">
        <img slot="icon" src="@/assets/logo.png">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>

    <grid :cols="4">
      <grid-item v-for="i in 8" :key="i" link="/patient">
        <img slot="icon" src="@/assets/logo.png">
        <span class="grid-center">{{i}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>
