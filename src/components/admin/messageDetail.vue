<template>
  <div class="newsList">
    <el-row class="newsTitle">
      <h1>{{data.title}}</h1>
    </el-row>
    <el-row class="newsTime">
      <p>{{data.time}}</p>
    </el-row>
    <el-row class="content">
      <p v-for="(item,index) in dataArray" :key= index >{{item}}</p>
    </el-row>
    
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      data: {},
      currentPage: 1, //初始页
      pagesize: 5, //    每页的数据
      dataArray:[],
    };
  },
  created:function(){
    console.log(this.id);
     api.getMessage({id:this.$route.query.id}).then(res =>{
      if(res.status === 200){
        this.data = res.data;
        console.log(this.data);
        this.dataArray = this.data.content.split('。').slice(0,-1);
        console.log(this.dataArray)
      }
    })
  }
 
};
</script>
<style lang = "scss" scoped>
.newsList{
  padding:30px;
  width:1100px;
  /* border:1px solid black; */
  min-height:500px;
      margin:0 auto;
    .newsTitle{
      
      text-align:center;
      font-size:22px;
      line-height:22px;
    }
    .newsTime p{
      float:right;
    }
    .content{
      padding:10px;
      p{
        padding:10px;
        font-size:16px;
        
      }
    }
  }
</style>
