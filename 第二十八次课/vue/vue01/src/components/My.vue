
<template>
  <!-- npm i less@3.13.1 less-loader@4.1.0 --save -->
  <div id="wrapper">
    <div id="name">江西软件大学</div>
    <div id="content">江西软件大学简介</div>
    <!-- vue 的指令 -->
    <div v-for="(index,key) in lists" :key="key">
      {{ index.name }}
    </div>
    <div>{{message}}</div>
    <div>{{add}}</div>
    <div>{{information}}</div>
    <button v-on:click="reversedMessage">反转</button>
    <!-- mock数据 -->
    <div  v-for="(a,key) in arr" :key="key+12">
        <span>{{a.id}}</span>
        <span>{{a.name}}</span>
        <span :class="[a.active?'flag':'']">{{a.class}}</span>
        <span>{{a.address}}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      add:1,
      message:"ABCDEF",
      lists: [{ name: "张三" }, { name: "李四" }],
      information: null,
      arr:[]
    };
  },

  mounted() {
      axios.get("https://www.fastmock.site/mock/4374b55d0c92bba3cf7ec656e8103e56/_information_09/api/users").then((response )=>{
          this.information = response.data.student001
          var jsons = JSON.parse(JSON.stringify(response.data)) 
          console.log("----")
          console.log(jsons)
          console.log(jsons.length)
           for(var json in jsons) {
               this.arr.push(jsons[json])
           }
           console.log(this.arr)
      });


  },
  methods: {
      reversedMessage(event) {
        alert("123")
      return this.message.split("").reverse().join("");
    }
  },
};
</script>


<style scoped lang="less" rel="stylesheet/less">
#wrapper {
  background-color: red;
  #name {
    background-color: orange;
    font: 5em sans-serif;
  }
}
.flag{
    color:green
}
</style>
