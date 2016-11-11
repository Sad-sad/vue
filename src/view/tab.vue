<template lang="html">
  <h3>tab切换</h3>
  <div class="title">
    <ul>
      <li :class="{active:$index == index}"
          v-for='item in title'
          @click="tab($index)">{{ item }} </li>
    </ul>
    <div class="tabcontent">
      <div :class="{show:$index ==index }" v-for='item in title'> {{ item }} </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title:['娱乐','军事','科技'],
      index:0
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    tab(index) {
      this.index = index
    }
  },
  components: {}
}
</script>

<style lang="css">
.title{
  width: 100%;
}
.title ul{
  overflow: hidden;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
.title li{
  width: 33%;
  float: left;
  text-align: center;line-height: 30px;
  padding: 5px 0;
  border-right: 1px solid #f5f5f5;
}
.title li.active{
  color: #06babc;
}
.title li:nth-child(3){
  border:none;
}
.tabcontent{
  width: 100%;
  height: 200px!important;

}
.tabcontent div{
  height: 200px;
  display: none;
}
.tabcontent div.show{
  display: block;
}
</style>
