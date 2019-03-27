<template>
  <div class="content" @keydown="lost">
    <el-input v-model="username" placeholder="请输入公司账号" class="account"></el-input>
    <el-input v-model="passWord" placeholder="请输入密码" class="passWord" type="password"></el-input>
    <el-row class="btn">
      <el-button type="primary" @click="submit">登录</el-button>
    </el-row>
    <el-row v-if="loginFlag" class="error">账号密码不对应或者不存在该账号</el-row>
    <el-row v-if="forbidden" class="error">你已经被管理员禁止登陆！请联系管理员</el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      username: "",
      passWord: "",
      loginFlag:false,
      forbidden: false,
      userKey:0,
    };
  },
  methods:{
    submit() {
            api.loginApart({
                userName: this.username,
                password: this.passWord
            }).then(res => {
                if (res.data.status == 'success') {
                    // this.$store.dispatch('setUser', this.username);
                    this.userKey = res.data.userKey;
                    this.$router.push({name:'oneNotification',params:{userKey:this.userKey}});//跳转哪一个路由
                   
                }
                else if(res.data.status == 'fail'){
                  this.loginFlag = true;
                }
                else{
                  this.forbidden = true;
                }
            })
        },
      lost() {
      this.loginFlag = false;
      this.forbidden = false;
    }
  }
};
</script>

<style lang = "scss" scoped>
@import "@/assets/css/login/login.scss";
.content{
  .error{
    text-align:center;
    color:red;
  }
}
</style>