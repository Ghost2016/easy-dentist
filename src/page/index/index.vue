<template>
  <div>
    <div class="vux-demo">
      <h1>轻松牙医</h1>
    </div>
    <router-view></router-view>
    <tabbar>
      <tabbar-item link="/work" selected>
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">我的工作</span>
      </tabbar-item>
      <tabbar-item show-dot link="/patient">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">我的患者</span>
      </tabbar-item>
      <tabbar-item link="/find">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/personalCenter">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  mounted() {
    // const url = 'http://120.27.238.253:5991'
    // const method = 'post'
    // window.requestData(url, method, (data) => {
    //   alert(data)
    // }, {}, undefined)
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
