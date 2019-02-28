<template>
  <el-container class="notificationWrap">
    <el-aside width="450px">
      <el-row class="noticeContent">
        <ul>
           <li v-for="(item,index) in newList.slice(0,9)" :key="index" >
             <el-col :span="19">
               <router-link :to = "{name: 'notificationRight',params:{id:item.id}}"><h3>{{item.title}}</h3></router-link>
             </el-col>
             <el-col :span="5" class="newsTime">{{item.time}}</el-col>
           </li>
           
           
        </ul>
      </el-row>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      newList:[
        {
          id:1,
          title: '今天下大雨',
          content: '今天全国各地都下大雪',
          time:'2/26'
        },
        {
          id:2,
          title: '下大雪',
          content: '到大是多湿哒哒所送达',
          time:'2/26'
        },
        {
          id:3,
          title: '今天是的撒雨',
          content: '今天湿哒哒所多所多撒雪',
          time:'2/26'
        },
        {
          id:4,
          title: '今天电放费雨',
          content: '按时送达非凡哥',
          time:'2/26'
        },
      ]
    }
  }
};
</script>

<style scoped>
.notificationWrap {
  width: 1500px;
  height: 540px;
  background-color: #fff;
  margin: 0 auto;
  /* border: 1px solid black; */
}
.notificationWrap .noticeContent{
  padding:25px;
  height:100%;
}
.notificationWrap .noticeContent ul li{
  margin-bottom:20px;
  padding:10px;
  font-size:18px;
}
.notificationWrap .noticeContent ul li .newsTime{
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
  background-color: #e9eef3;
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
