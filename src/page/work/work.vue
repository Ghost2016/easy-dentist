<template>
  <div>
    <!-- <h1>我的工作</h1> -->
    <!-- <group-title> 我的工作具体项 </group-title> -->
    <div class="swiper-title-wrapper" >
      <i class="go-back" @click="goBack"></i>
      <span class="swiper-title">2018年9月的业绩</span>
      <i class="go-forward" @click="goForward"></i>
    </div>
    <swiper class="easy-swiper" v-model="swiper_index" :height="'100px'" @on-index-change="onIndexChange" :show-dots="false">
      <swiper-item v-for="(item, index) in swiper_list" :key="index">
        <div class="swiper-inner-wrapper">
          <ul class="swiper-ul">
            <li class="swiper-li">
              <a @click="$router.replace('/patient')" >初诊 3人
                <i class="cell-arraw-right"></i>
              </a>
            </li>
            <li class="swiper-li">
              <a @click="$router.replace('/patient')" >复诊 19人
                <i class="cell-arraw-right"></i>
              </a>
            </li>
            <li class="swiper-li">
              <a @click="$router.replace('/patient')" >收费1000元
                <i class="cell-arraw-right"></i>
              </a>
            </li>
            <li class="swiper-li">
              <a @click="$router.push('/patient')" >19日预约 3人
                <i class="cell-arraw-right"></i>
              </a>
            </li>
            <li class="swiper-li">
              <a @click="$router.push('/patient')" >爽约 3人
                <i class="cell-arraw-right"></i>
              </a>
            </li>
            <li class="swiper-li">
              <a @click="$router.replace('/patient')" >回访 19人
                <i class="cell-arraw-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </swiper-item>
    </swiper>
    <!-- <x-button @click.native="swiper_index = 0">go to 0</x-button>
    <x-button @click.native="swiper_index = 1">go to 1</x-button>
    <x-button @click.native="swiper_index = 2">go to 2</x-button> -->
    <grid>
      <grid-item v-for="i in topItems" :key="i.name" :link="i.url">
        <img slot="icon" :src="i.icon" @error="setErrorImage"/>
        <span class="grid-center">{{i.name}}</span>
      </grid-item>
    </grid>
    <div class="divider"></div>
    <grid :cols="4">
      <grid-item v-for="i in bottomItems" :key="i.name" link="/patient">
        <img slot="icon" :src="i.icon" @error="setErrorImage">
        <span class="grid-center">{{i.name}}</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Icon, XButton, Swiper, SwiperItem, Grid, GridItem, GroupTitle } from 'vux'
import { Cell } from 'mint-ui'
export default {
  components: {
    Cell: Cell,
    Icon,
    XButton,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    GroupTitle
  },
  data() {
    const baseList = [{
    }, {
    }, {
    }]
    return {
      swiper_index: 0,
      swiper_list: baseList,
      topItems: [
        {
          name: '新增患者',
          icon: require('@/assets/logo.png'),
          url: '/patient/add'
        },
        {
          name: '无号预约',
          icon: require('@/assets/logo.png'),
          url: ''
        },
        {
          name: '有号预约',
          icon: require('@/assets/logo.png'),
          url: ''
        },
        {
          name: '新增回访',
          icon: require('@/assets/logo.png'),
          url: ''
        }
      ],
      bottomItems: [
        {
          name: '患者中心',
          icon: require('@/assets/logo.png')
        },
        {
          name: '预约中心',
          icon: require('@/assets/logo.png')
        },
        {
          name: '回访中心',
          icon: require('@/assets/logo.png')
        },
        {
          name: '通讯录',
          icon: require('@/assets/logo.png')
        },
        {
          name: '报表中心',
          icon: require('@/assets/logo.png')
        },
        {
          name: '业绩日历',
          icon: require('@/assets/logo.png')
        },
        {
          name: '医患沟通',
          icon: require('@/assets/logo.png')
        }
      ]
    }
  },
  methods: {
    // 如果找不到图片则会加载默认图片
    setErrorImage(e) {
      e.target.src = require('@/assets/404.png')
    },
    onIndexChange(index) {
      this.swiper_index = index
    },
    // 向前
    goBack() {
      if (this.swiper_index === 0) {
        // this.request()
      } else {
        this.swiper_index--
      }
    },
    // 往回
    goForward() {
      if (this.swiper_index !== (this.swiper_list.length - 1)) {
        this.swiper_index++
      }
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  width:50px;
}

.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.divider {
  text-align: center;
  width:80%;
  height:0;
  border: 0;
  border-bottom: 1px solid rgb(194, 194, 194);
  margin:20px auto;
}
.swiper-title-wrapper{
  position: relative;
  margin: 20px 0;
  width: 100%;
  font-size: 20px;
  display: flex;
  .go-back {
    margin:0 20px 0 20%;
  }
  .go-forward {
    margin:0 20% 0 20px;
  }
  .swiper-title {
    flex:1;
    text-align: center;
  }
}
.swiper-inner-wrapper{
  .swiper-ul{
    font-size: 0;
    .swiper-li{
      height:33px;
      line-height: 33px;
      position: relative;
      box-sizing: border-box;
      padding-right: 40px;
      text-align: right;
      cursor: pointer;
      font-size:14px;
      width:50%;
      display:inline-block;
    }
  }
}
.easy-swiper{
  // height:120px;
  margin: 20px 20px;
  border: 1px solid grey;
}
//  进入小符号
.cell-arraw-right::after{
  border: 2px solid #c8c8cd;
  border-bottom-width: 0;
  border-left-width: 0;
  content: " ";
  top: 50%;
  right: 20px;
  position: absolute;
  width: 5px;
  height: 5px;
  -webkit-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
}

.go-back::after{
    content:"";
    display: block;
    border-color: transparent;
    border-right-color: #dbdbdb;
    border-width: 10px;
    border-style:solid;
    width:0;
    height:0;
    position:absolute;
    top: 5px;
    left:10%;
}
.go-forward::after{
    content:"";
    display: block;
    border-color: transparent;
    border-left-color: #dbdbdb;
    border-width: 10px;
    border-style:solid;
    width:0;
    height:0;
    position:absolute;
    top: 5px;
    right:10%;
}
</style>
