<template>
  <div class="content">
    <el-input v-model="username" placeholder="请输入学生账号" class="account"></el-input>
    <el-input v-model="password" placeholder="请输入密码" class="passWorld" type ="password"></el-input>
    <el-row class="btn">
      <el-button type="primary" @click="submit">登录</el-button>
    </el-row>
    <el-row v-if="loginFlag" class="error">账号密码不对应或者不存在该账号</el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data(){
    return {
      username: '',
      password: '',
      loginFlag:false,
    }
  },
  methods:{
    submit() {
            api.login({
                userName: this.username,
                password: this.password
            }).then(res => {
                console.log(res);
                if (res.data.status == 'success') {
                    // this.$store.dispatch('setUser', this.username);
                    this.$router.push({name:'home'});//跳转哪一个路由
                    
                }
                if(res.data.status == 'fail'){
                  this.loginFlag = true;
                }
            })
        }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";
.content{
  .error{
    text-align:center;
    color:red;
  }
}
</style>