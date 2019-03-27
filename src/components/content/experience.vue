<template>
  <div class="experienceWrap">
    <div class="logo">
      <h2>听取经验</h2>
      <h3>让自己少走弯路</h3>
    </div>
    <div class="experienceContent">
      <!-- <ul> -->
        <!-- <li @click="jump(item.id)" v-for="(item,index) in dataList" :key="index"><a href="#"><h1>{{item.title}}</h1><p>{{item.content}}</p></a></li> -->
      <!-- </ul> -->
      <router-link v-for="(item,index) in dataList" :key="index" class = "nameList" :to = "{name:'experienceDetail',params:{id:item.id,userKey:userKey}}">
        <h1>{{index+1}}.{{item.title}}</h1>
        <p>{{item.content}}</p>
        </router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data(){
    return {
      dataList : [],
      userKey:'',
    }
  },
   created:function(){
     this.userKey = this.$route.params.userKey;
     api.getExperience().then(res => {
       if(res.status === 200){
        //  this.dataList = res.data;
         [...this.dataList] = res.data;
        //  console.log(this.dataList);
       }
     })
     },
    //  updated:function(){
    //    api.getExperience().then(res => {
    //    if(res.status === 200){
    //     //  this.dataList = res.data;
    //      console.log(res.data);
    //      [...this.dataList] = res.data;
    //      console.log(this.dataList)
    //     //  console.log(this.dataList);
    //    }
    //  })
    //  },
     methods:{
       jump(id){
         api.getDetailExperience({id:id}).then(res =>{
         })
       }
     }
};
</script>

<style lang = "scss" scoped>
.experienceWrap {
  width: 1300px;
  height: 650px;
  margin: 0 auto;
  .logo {
        min-width: 1024px;
    height: 125px;
    padding-top: 35px;
    background: #100f06 url('../../assets/bc1.jpg') center center no-repeat;

    h2 {
      margin:0 auto;
      margin-bottom: 6px;
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
      color: #fff;
      text-align: center;
    }
    h3 {
      margin-bottom: 4px;
      font-size: 26px;
      line-height: 36px;
      color: #fff;
      text-align: center;
    }
  }
  .experienceContent{
    height:490px;
      .nameList{
        float:left;
        width:627px;
        height:80px;
        padding:10px;
        margin-bottom:2px;
        margin-right:2px;
        border-bottom:1px dashed grey;
        border-right:1px dashed grey;
        text-decoration: none;
          h1{
            padding:5px;
            color:#333;
            &:hover{
              color: #00b38a;
            }
          }
          p{
            color:#555;
            padding:10px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          
        }
        
    
  }
}
</style>
