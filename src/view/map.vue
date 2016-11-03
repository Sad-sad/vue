<template lang="html">
<h3>地图</h3>
<div class="search-box">
  <input type="text" name="name" value="" placeholder="请输入搜索地址" v-model='search'>
  <button type="button" name="button" @click="searchmap()">搜索</button>
</div>
<div class="baidumap" v-el:map>

</div>
</template>

<script>
var map
export default {
  data () {
    return {
      search:''
    }
  },
  computed: {},
  ready () {
    this.init()
  },
  attached () {},
  methods: {
    init() {
      map = new BMap.Map(this.$els.map)
      map.centerAndZoom(new BMap.Point(121.491, 31.233), 11)
      var overView = new BMap.OverviewMapControl()
      map.addControl(overView)

       var navigationOpts = {
           anchor: BMAP_ANCHOR_TOP_LEFT,
           type: BMAP_NAVIGATION_CONTROL_ZOOM,
           offset: new BMap.Size(10, 10)
       }
       map.addControl(new BMap.NavigationControl(navigationOpts))

       var geolocationOpts = {
           anchor: BMAP_ANCHOR_TOP_RIGHT,
           offset: new BMap.Size(0, 0),
           showAddressBar: true
       }
       map.addControl(new BMap.GeolocationControl(geolocationOpts))
    },
    searchmap() {
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
      var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
      });
      local.search(this.search);
    }
  },
  components: {}
}
</script>

<style lang="css">
.search-box{
  height: 50px;
  padding: 0 10px;
}
.search-box input[type='text']{
  width: 70%;
  padding: 10px 0;

}
.search-box button{
  padding: 10px;
  border: 1px solid #ccc;
}
.baidumap{
  padding: 10px;
  height: 500px;
}
</style>
