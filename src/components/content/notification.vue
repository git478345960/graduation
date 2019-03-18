<template>
  <el-container class="notificationWrap">
    <el-aside width="450px">
      <el-row class="noticeContent">
         <router-link v-for="(item,index) in newList" :key="index" :to = "{name: 'notificationRight',params:{id:item.id,userKey:userKey}}" class="linkTo" @click.native="flush">
           <el-col :span="17"><h1>{{item.title}}</h1></el-col>
           <el-col :span="7"><p>{{item.time}}</p></el-col>
         </router-link>
      </el-row>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import api from "@/api/index.js";
export default {
  data(){
    return {
      newList:[],
      userKey:this.$route.params.userKey,
    }
  },
  created:function(){
    console.log(this.$route.params);
    api.getMessageInfo().then(res =>{
      [...this.newList] = res.data;
      // console.log(res.data);
      console.log(this.newList);
    })
  },
  methods:{
    flush(){
      this.$router.go(0);

    }
  }
};
</script>

<style scoped>
.notificationWrap {
  width: 1300px;
  height: 540px;
  background-color: #fff;
  margin: 0 auto;
  /* border: 1px solid black; */
}
.notificationWrap .noticeContent {
  padding:25px;
  height:100px;
  width:100%;
}
.notificationWrap .noticeContent .linkTo{
  height:41px;
  width:100%;
  display: block;;
}
.notificationWrap .noticeContent .linkTo:hover h1,
.notificationWrap .noticeContent .linkTo:hover p{
  color:#00b38a;
}
.notificationWrap .noticeContent h1{
  margin-bottom:20px;
  padding:10px;
  /* font-size:18px; */
  font-weight:bold;
  color:#333;
}
.notificationWrap .noticeContent p{
  color:#999999;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  /* text-align: center; */
  /* line-height: 200px; */
  height: 540px;
}

.el-main {
  background-color: #fff;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
  height: 540px;
}

body > .el-container {
  margin-bottom: 40px;
}


.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
