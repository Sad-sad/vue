<template lang="html">
<h3>表单</h3>
<div class="input-box">
  <group title="input text">
    <cell title="左边文字" value='value'></cell>
  </group>
  <group>
    <cell>

    </cell>
  <group>
</div>
<div>
</div>
</template>

<script>
import cell from '../component/cell'
import group from '../component/group'
//import input from '../component/x-input'
export default {
  name:'form',
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    cell,
    group,
    //input
  }
}
</script>

<style lang="css">
.input-box{
  background: #fbf9fe;
}
</style>
