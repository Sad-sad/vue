<template lang="html">
  <h2>倒计时</h2>
<div v-el:countdown class="countdown">
  还有
<span>{{ CDay }}</span>天
<span>{{ CHour }}</span>小时
<span>{{ CMinute }}</span>分钟
<span>{{ CSecond }}</span>秒
<span></span>
</div>
</template>

<script>
export default {
  data () {
    return {
      remaining:111111,
      CDay:0,//天
      CHour:0,//小时
      CMinute:0,//分钟
      CSecond:0,//秒
      //Cmillseconds:0//毫秒
    }
  },
  computed: {},
  ready () {
    setInterval(this.countdown,1000)
  },
  attached () {},
  methods: {
    countdown(){
    // var endtime =11111111111111 ;//取结束日期(毫秒值)
    // var nowtime = new Date().getTime();  //今天的日期(毫秒值)
     var youtime = this.remaining;//还有多久(毫秒值)
     var seconds = youtime/1000;//秒
     var minutes = Math.floor(seconds/60);//分
     var hours = Math.floor(minutes/60);//小时
     var days = Math.floor(hours/24);//天
     var CHour= hours%24;

     var CMinute= minutes % 60;
     var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
     var c=new Date();
     var millseconds=c.getMilliseconds();
     var Cmillseconds=Math.floor(millseconds %100);
    if(youtime > 0){
        this.CDay = days;
       if(CSecond<10){//如果秒数为单数，则前面补零
          this.CSecond="0"+CSecond;
        }else{
          this.CSecond =CSecond
          console.log()
        }
       if(CMinute<10){ //如果分钟数为单数，则前面补零
        this.CMinute="0"+CMinute;
        }else{
          this.CMinute = CMinute
        }
       if(CHour<10){//如果小时数为单数，则前面补零
        this.CHour="0"+CHour;
        }else{
          this.CHour = CHour
        }
      this.remaining -=1000 
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
.countdown {
  font-size: 14px;
}
.countdown span{
  font-size: 16px;
  color: red;

}
</style>
