<template>
  <div class="newsList">
    <el-row class="newsTitle">
      <h1>{{data.title}}</h1>
    </el-row>
    <el-row class="newsTime">
      <p>{{data.time}}</p>
    </el-row>
    <el-row class="newsContent">
        <p>{{data.content}}</p>
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
