<template>
  <div class="wrapper">
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="病历号，必填" :required="true">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="患者姓名，必填" :required="true">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="手机，必填" :required="true">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="座机，选填" :required="false">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>

    <div class="sex-box">
      <checker class="sex-checker" radio-required v-model="sex" default-item-class="sex-item" selected-item-class="sex-item-selected">
        <checker-item class="sex-checker-item" value="male">男</checker-item>
        <checker-item class="sex-checker-item" value="female">女</checker-item>
      </checker>
    </div>

    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="生日，必填" :required="true">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="医生，必填" :required="true">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="患者来源" :required="false">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
    <group class="form-group">
      <x-input title="" :is-type="be2333" placeholder="住址，点击图标可以在地图中定位或者查看" :required="false">
        <img slot="label" class="form-icon" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000">
      </x-input>
    </group>
  </div>
</template>

<script>
import { Checker, CheckerItem, XInput, Group } from 'vux'
export default {
  components: {
    Checker,
    CheckerItem,
    XInput,
    Group
  },
  data() {
    return {
      sex: 'male'
    }
  },
  methods: {
    be2333: function(value) {
      return {
        valid: value === '2333',
        msg: 'Must be 2333'
      }
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.form-group{
  margin:0 20px;
  .form-icon{
    width:24px;
    height:24px;
    padding-right:10px;
    display:block;
  }
}
.sex-box{
  .sex-checker{
    text-align: center;
    .sex-checker-item{
      font-size:20px;
    }
  }
  
}
.sex-item {
  margin-top: 20px;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.sex-item-selected {
  border-color: green;
}
</style>

