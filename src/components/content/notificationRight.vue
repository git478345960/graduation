<template>
  <div class="newsList">
    <el-row class="newsTitle">
      <h1>{{data.title}}</h1>
    </el-row>
    <el-row class="newsTime">
      <p>{{data.time}}</p>
    </el-row>
    <el-row class="newsContent">
        <p style="padding-bottom:10px;font-size:18px;" v-for="(item,index) of dataArray" :key="index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item}}。</p>
    </el-row>
    
  </div>
    

  
</template>

<script scoped>
import api from "@/api/index.js";
export default {
  data(){
    return {
      dataArray:[],
      data:{},
      id:this.$route.params.id
    }
  },
  created:function(){
     api.getMessage({id:this.id}).then(res =>{
      if(res.status === 200){
        
        this.data = res.data;
        console.log(this.data);
        this.dataArray = this.data.content ? this.data.content.split('。').slice(0,-1) :this.data.content;
        console.log(this.dataArray)
      }
    })
  }
};
</script>

<style lang = "scss" scoped>
  .newsList{
    .newsTitle{
      text-align:center;
      font-size:22px;
      line-height:22px;
    }
    .newsTime p{
      float:right;
    }
    .newsContent{
      padding:10px;
      p{
        font-size:16px;
        
      }
    }
  }

</style>
