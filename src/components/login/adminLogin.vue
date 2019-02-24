<template>
  <div class="content">
    <keep-alive>
        <el-input v-model="username" placeholder="请输入管理员账号" class="account"></el-input>
    </keep-alive>
    <keep-alive>
     <el-input v-model="passWorld" placeholder="请输入密码" class="passWorld" type ="password"></el-input>
    </keep-alive>
   
    <el-row class="btn">
      <el-button type="primary">登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: '',
      passWorld: '',
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";

</style>