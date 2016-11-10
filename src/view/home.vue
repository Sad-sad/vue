<template lang="html">
  <div class="head">
    <div class="topbar">
        顶部
        <p @click='showToast'>
          alert
        </p>
    </div>
    <div class="nav">
      <ul>
        <li v-link="{ path:'/index' }">首页</li>
        <li v-link="{ path:'/table' }">table</li>
        <li v-link="{ path:'/form' }">表单</li>
        <li v-link="{ path:'/tab' }">tab 切换</li>
        <li v-link="{ path:'/map' }">地图</li>
        <li v-link="{ path:'/select' }">select</li>
      </ul>
    </div>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="go-top" v-show="showgotop" v-el:go-top @click="top()">
    <img src="http://www.51xuediannao.com/uploads/allimg/140105/1-140105142G5-50.gif" alt="" />
  </div>
  <div class="foot">
     底部
  </div>
<toast :show.sync="show">
  <p>
    登录框
  </p>
</toast>
</template>
<script>
import hello from '../component/hello.vue'
import toast from '../component/toast.vue'

export default {
  name: 'home',
  data () {
    return {
      show:false,
      showgotop:false
    }
  },
  computed: {},
  ready () {
    this.gotop()
  },
  attached () {},
  methods: {
    gotop() {
      var _self = this
      window.addEventListener('scroll',function(){
        if(document.body.scrollTop > 300){
          _self.showgotop = true
        }else{
          _self.showgotop = false
        }
      })
    },
    top(){
      document.body.scrollTop = 0
    },
    showToast (){
      this.show = true
    }
  },
  components: {
    hello,
    toast
  }
}
</script>

<style lang="css">
.head{
  height: 80px;
  background: #ccc;
}
.topbar{
  height: 50px;
  margin:  0 auto;
  text-align: center;
}
.nav{
  margin: 0  auto;
  background: #06babc;
  overflow: hidden;
}
.nav li{
  float: left;
  margin-right: 40px;
  color:#fff;
  line-height: 30px;
}
.nav li.v-link-active{
  color: yellow;
}
.foot{
  height: 40px;
  background: #eee;
  margin: 0 auto;
    text-align: center;
}
.go-top{
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.content{
  margin: 40px auto 0 ;
  min-height: 1500px;
}
</style>
