<template lang="html">
  <div class="toast-bg" v-show="show" @click="closeToast">
    <div class="toast-box" @click.stop="">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    closeToast(){
      this.show = false
    }
  },
  components: {}
}
</script>

<style lang="css">
  .toast-bg{
    position:fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
    background:rgba(0,0,0,0.5);
    z-index:8;
  }
  .toast-box{
    padding: 30px;
    width: 320px;
    height: 320px;
    background: #fff;
    position: fixed;
    left:50%;
    top:50%;
    margin: -200px 0 0 -200px;
    border-radius: 10px;
    z-index: 10px;
  }
</style>
