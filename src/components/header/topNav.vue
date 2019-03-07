<template>
    <div class = "topNav">
     <el-row class ="topCon">
       <el-col :span = "12" class = "right">
         <ul>
           <li>
             <router-link :to="{name: 'personal',params:{userKey:this.$route.params.userKey}}">我的简历{{this.$route.params.userKey}}</router-link>
           </li>
           <li>|</li>
           <li>
             <router-link :to="{name: '/'}">投递箱</router-link>
           </li>
           <li>|</li>
           <li v-if="isLogin == false">
             <router-link :to="{name: 'login'}">登录</router-link>
           </li>
           <li v-else><router-link :to="{name: 'login'}">注销</router-link></li>
         </ul>
       </el-col>
     </el-row>

    </div>

</template>

<script>
export default{
  data(){
    return {
      isLogin: false,
      userKey:this.$route.params.userKey

    }
  },
  created:function(){
    this.isLogin = this.$route.params.userKey ? true: false;
  }

}
</script>

<style lang = "scss" scoped>
  .topNav{
     height:35px;
     width:100%;
     background-color:black;
     /* margin:auto; */
     .topCon{
       height:100%;
       .left {
         height:100%;
         ul{
           padding-left:60px;
           float:left;
           height:100%;
           li{
             color:#fff;
             height:100%;
             float:left;
             font-size:16px;
             margin-right:10px;
             line-height:35px;


           }
         }
       }
       .right{
         float:right;
         ul{
           padding-right:60px;
           float:right;
           height:100%;
           li{
              color:#fff;
             height:100%;
             float:left;
             font-size:16px;
             margin-right:10px;
             line-height:35px;
             a{
               text-decoration: none;
               color:#fff;
             }
           }
         }
       }
     }
  }

</style>
<style>

</style>

