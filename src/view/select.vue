<template lang="html">
<div class="">
  <h2>select应用</h2>
  <selectlist :options = option></selectlist>
</div>
</template>

<script>
import selectlist from '../component/selectlist.vue'
export default {
  data () {
    return {
      option:[
        {id:1,text:'111'},
        {id:2,text:'222'},
        {id:3,text:'333'}
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    selectlist
  }
}
</script>

<style lang="css">
</style>
