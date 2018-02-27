<template>
  
  <div style="height:100%;">
   <view-box ref="viewBox" :body-padding-bottom="isIndex ? '50px' : '0'" :body-padding-top="'50px'">
     <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
     <router-view style="height:100%;margin:0 0;z-index:1;overflow:scroll;"></router-view>
     <!-- <router-view></router-view> -->
     <tabbar v-if="isIndex" style="position:fixed;z-index:2" v-model="selectedItem">
      <tabbar-item link="/work">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">我的工作</span>
      </tabbar-item>
      <!-- <tabbar-item show-dot link="/patient"> -->
      <tabbar-item show-dot @on-item-click="$router.replace({path:'/patient'})">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">我的患者</span>
      </tabbar-item>
      <!-- <tabbar-item link="/find"> -->
      <tabbar-item show-dot @on-item-click="$router.replace({path:'/find'})">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <!-- <tabbar-item badge="2" link="/personalCenter"> -->
      <tabbar-item badge="2" @on-item-click="$router.replace({path:'/personalCenter'})">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
   </view-box>
 </div>
</template>

<script>
import { ViewBox, XHeader, Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem,
    ViewBox,
    XHeader
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      selectedItem: 0
    }
  },
  computed: {
    isIndex() {
      return !/^\/.*\/+.*$/.test(this.$route.path)
    }
  },
  mounted() {
    // const url = 'http://120.27.238.253:5991'
    // const method = 'post'
    // window.requestData(url, method, (data) => {
    //   alert(data)
    // }, {}, undefined)
  },
  created() {
    // dlnacasts.on('update', function(player) {
    //   console.log('all players: ', dlnacasts.players)
    //   player.play('http://example.com/my-video.mp4', { title: 'my video', type: 'video/mp4' })
    // })
  },
  watch: {
    $route(route) {
      if (route.path.indexOf('/work') > -1) {
        this.selectedItem = 0
      } else if ((route.path.indexOf('/patient') > -1)) {
        this.selectedItem = 1
      } else if ((route.path.indexOf('/find') > -1)) {
        this.selectedItem = 2
      } else if ((route.path.indexOf('/personalCenter') > -1)) {
        this.selectedItem = 3
      }
    }
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
