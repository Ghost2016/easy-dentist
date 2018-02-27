<template>
  <div class="wrapper">
    <!-- <img src="../assets/demo/filter_bg.jpg" style="width: 100%"> -->
    <search
    :placeholder="'病历号、姓名、拼音模糊搜索'"
    :auto-fixed="autoFixed"
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    auto-scroll-to-top 
    top="50px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    @on-blur="onBlur"
    ref="search">
    </search>
    <div class="content">
      <div class="content-notice">
        <p>搜索结果：近期就诊/新建的患者前30人（默认列表）</p>
      </div>
      <ul class="patient-list">
        <li v-for="patient in patient_list" :key="patient.id" class="patient-item">
          <span>{{patient.number}}</span>
          <span>{{patient.name}}</span>
          <span>{{patient.sex}}</span>
          <span>{{patient.age}}</span>
          <span>{{patient.birthday}}</span>
          <span>{{patient.doctor}}</span>
        </li>
      </ul>
    </div>
    <!-- <group>
      <cell title="keyword">{{value}}</cell>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="setFocus" type="primary">set focus</x-button>
    </div> -->
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from 'vux'
import { test } from '@/api/patient'
export default {
  components: {
    Search,
    Group,
    Cell,
    XButton
  },
  data() {
    return {
      // 输入搜索框后从服务器返回的匹配值
      results: [],
      // 搜索框初始值
      value: '',
      autoFixed: true,
      patient_list: [
        {
          id: 1,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 2,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 3,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 13,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 813,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 715,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 99,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 78,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 75,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 73,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 71,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        },
        {
          id: 72,
          number: '11100',
          name: '张大',
          sex: '男',
          age: 26,
          birthday: '1992-09-23',
          doctor: '李世民'
        }
      ]
    }
  },
  methods: {
    // 为搜索框聚焦
    setFocus() {
      this.$refs.search.setFocus()
    },
    // 点击键盘搜索
    resultClick(item) {
      // window.alert('you click the result item: ' + JSON.stringify(item))
      this.value = item.title
      this.$refs.search.setBlur()
      this.onSubmit(item)
    },
    // 值变化
    getResult(val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit(item) {
      alert('on submit')
      console.log('on submit')
      // window.alert('you onSubmit the result item: ' + JSON.stringify(item))
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus() {
      // alert('on focus')
      console.log('on focus')
    },
    onCancel() {
      alert('on cancel')
      console.log('on cancel')
    },
    onBlur() {
      alert('on blur')
      console.log('on blur')
    },
    request() {
      alert('request')
      test().then(
        res => {
          alert(JSON.stringify(res))
        }
      ).catch(
        e => {
          alert(e)
        }
      )
    }
  },
  created() {
    // this.request()
  }
}
function getResult(val) {
  const rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}

</script>

<style lang="less" scoped>
.wrapper{
  
}
.content{
  margin: 0 20px;
  .content-notice{
    margin: 20px 0;
    p{
      text-align: center;
    }
  }
}
.patient-list{
  .patient-item{
    padding: 3px;
    margin: 15px 0;
    border: 1px solid gray;
    font-size:16px;
    text-align: center;
    span{

    }
  }
}
</style>
