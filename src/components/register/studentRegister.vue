<template>
  <div class="content">
    <keep-alive>
        <el-input v-model="username" placeholder="请输入需要设置的学生账号" class="rAccount"></el-input>
    </keep-alive>
    <keep-alive>
     <el-input v-model="passWorld" placeholder="请输入密码" class="rPassWorld" type ="password"></el-input>
    </keep-alive>
    <keep-alive>
     <el-input v-model="sePassWorld" placeholder="请再次输入密码" class="sePassWorld" type ="password"></el-input>
    </keep-alive>
   
    <el-row class="btn">
      <el-button type="primary">立即注册</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: '',
      passWorld: '',
      sePassWorld:''
      
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";


</style>