<template lang="html">
  <h3>表格数据展示</h3>
  <div class="button">
    <label>
    <input type="text" name="name"placeholder="请输入关键字" v-model="searchmsg">
  </label>
  <button type="button" name="button" @click="show()">新增</button>
  </div>
  <table>
    <thead>
      <tr>
        <td v-for='item in tabletitle'>{{ item }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for='(index,list) in lists | filterBy searchmsg' >
        <td>{{ list.name }}</td>
        <td>{{ list.age }}</td>
        <td>{{ list.sex }}</td>
        <td>{{ list.school }}</td>
        <td>{{ list.ismarry }}</td>
        <td class="handle">
						<button class="btn btn-danger" @click="deletet(index)">删除</button>
						<!--<button class="btn btn-warning" @click='modify(index)'>修改</button>-->
				</td>
      </tr>
    </tbody>
  </table>
  <toast :show="showbox">
    <h3>修改信息</h3>
    <div class="creatbox">
      <p>
      <span>姓名：</span>
      <input type="text" name="name" v-model='creatdata.name' value="" >
      </p>
      <p>
      <span>年龄：</span>
      <input type="text" name="" value="" v-model='creatdata.age'>
      </p>
      <p>
      <span>性别：</span>
      <input type="text" name="name" value="" v-model='creatdata.sex'>
      </p>
      <p>
      <span>学校：</span>
      <input type="text" name="name" value="" v-model='creatdata.school'>
      </p>
      <p>
      <span>是否已婚：</span>
      <input type="text" name="name" value="" v-model='creatdata.ismarry'>
      </p>
      <p>
        <button type="button" name="button" @click="save()">保存</button>
      </p>
    </div>
  </toast>
</template>

<script>
import toast from '../component/toast.vue'
export default {
  name: 'table',
  data () {
    return {
      showbox:false,
      tabletitle:['姓名','年龄','性别','学校','是否婚配','操作'],
      creatdata:{
        name:'',
        age:'',
        sex:'',
        school:'',
        ismarry:'',
        all:{

        }
      },
      lists:[
        {
          name:'张三',
          age: 222,
          sex:'男',
          school:'北大',
          ismarry:'是'
        },
        {
          name:'李四',
          age: 33,
          sex:'男',
          school:'清华',
          ismarry:'是'
        },
        {
          name:'王五',
          age: 33353,
          sex:'男',
          school:'复旦',
          ismarry:'是'
        },
        {
          name:'马六',
          age: 666,
          sex:'男',
          school:'浙大',
          ismarry:'是'
        }
      ]
    }
  },
  computed: {},
  ready () {

  },
  attached () {},
  methods: {
    show() {
      this.showbox = true
    },
    save() {

      this.creatdata.all.name = this.creatdata.name
      this.creatdata.all.age = this.creatdata.age
      this.creatdata.all.sex = this.creatdata.sex
      this.creatdata.all.school = this.creatdata.school
      this.creatdata.all.ismarry = this.creatdata.ismarry
      if( this.creatdata.all.name && this.creatdata.all.age&&this.creatdata.all.sex &&this.creatdata.all.school&& this.creatdata.all.ismarry ){
      this.lists.push( this.creatdata.all )
      this.creatdata.all = {}
      this.showbox = false
    }else{
      window.alert('请输入完整信息')
    }
    },
    deletet(index) {
      if(window.confirm('确认删除么')){
        this.lists.splice(index,1)
      }
    },
     modify (index){
     	this.showbox = true
     }
  },
  components: {
    toast
  }
}
</script>

<style lang="css">
input {
  border:1px solid #ccc;
}
table{
  border: 1px solid #daf3ff;
  margin: 0 auto;
}
table thead tr{
  line-height: 30px;
  text-align: center;
  background: #eaf8ff;
}
table td{
  line-height: 30px;
  text-align: center;
  border: 1px solid #daf3ff;
}
.button{
  margin: 10px auto 30px;

}
.creatbox p {
  margin: 10px 0;
}
h3{
  font-size:20px;
  text-align: center;
}
</style>
