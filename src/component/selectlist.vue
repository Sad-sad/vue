<template lang="html">
<div class="v-select">
  <div @click="click" v-el:text :title="text"class="text">
    {{text}}
  </div>
  <div class="option" v-show="showoption">
    <ul>
      <li v-for='o in options' @click='option(o)'>{{ o.text }}</li>
    </ul>
  </div>
</div>
</template>

<script>
import globe from '../util/globeclick.js'
export default {
  props:{
    text:{
      type:String,
      default:'请选择'
    },
    options:{
      type:Array,
      default:''
    }
  },
  data () {
    return {
      showoption:false
    }
  },
  created(){
    var _self = this
    window.addEventListener('click', function (e) {
      if (e.target !== _self.$els.text) {
          _self.showoption = false
      }
    })
  },
  methods: {
    click() {
      this.showoption = !this.showoption
    },
    option(options){
        this.text = options.text
        this.showoption = false
    }

  },
  components: {}
}
</script>

<style lang="css">
.v-select{
  width: 50%;
  margin: 0 auto;
}
.v-select .text{
  display: inline-block;
   position: relative;
   width: 100%;
   height: 26px;
   line-height: 26px;
   vertical-align: middle;
   padding: 0 26px 0 8px;
   border: 1px solid #EDEDED;
   font-size: 12px;
   color: #666;
   cursor: pointer;

}
.text:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 8px;
    width: 10px;
    height: 6px;
    margin-top: -3px;
    background: url("../assets/image/icon-arrow.png") 0 0 no-repeat;
}
.option{
  width: 100%;
  padding-right: 34px;
  border: 1px solid #DAF3FF;
  background-color: #EAF8FF;
}
.option li{
  width: 100%;
  height: 30px;
  padding-right: 34px;
  line-height: 30px;
  font-size: 14px;
  text-indent: 8px;
}
.option li:hover{
  color: #fff;
  background-color: #61ABDA;
}
</style>
