<template lang="html">
  <h3>轮播图</h3>
  <p>api  http://www.dlworld.cn/XueXiSuanFa/863.html</p>

  <div class="silder">
    <silder :pages="someList" :sliderinit="sliderinit"></silder>
    <button type="button" name="button" @click='slidePre'>上一张</button>
    <button type="button" name="button" @click='slideNext'>下一张</button>
  </div>
</template>

<script>
import silder from '../component/silder.vue'
export default {
  data () {
    return {
      someList:[
        {
          title:'1',
          style:{background:'red'}
        },
        {title:'2',style:{background:'yellow'}},
        {title:'3',style:{background:'pink'}}
      ],
      sliderinit: {
          // 写了一些无需配置的项，下个版本会放到slider设定默认值
          currentPage: 1,//当前页码
          loop:true,  //循环滚动
          direction:'horizontal'//方向设置，垂直滚动
        }
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
      turnTo (num) {
          // 传递事件
          this.$broadcast('slideTo', num);
      },
      slideNext () {
          this.$broadcast('slideNext');
      },
      slidePre () {
          this.$broadcast('slidePre');
      }
  },
  components: {
    silder
  }
}
</script>

<style lang="css">
.silder{
  width: 100%;
  height: 200px;
  border:1px solid #f5f5f5;
}
</style>
