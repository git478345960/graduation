<template>
  <div class="content">
        <el-input v-model="username" placeholder="请输入管理员账号" class="account"></el-input>
     <el-input v-model="password" placeholder="请输入密码" class="passWord" type ="password"></el-input>
    <el-row class="btn">
      <el-button type="primary" @click="submit">登录</el-button>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data(){
    return {
      username: '',
      password: '',
      userKey:'',
    }
  },
  methods:{
    submit(){
      api.login({
                userName: this.username,
                password: this.password
            }).then(res => {
              // console.log(res);
                if (res.data.status == 'success' && res.data.admin) {
                    this.userKey = res.data.userKey;
                    this.$router.push({name:'message'});//跳转哪一个路由
                    
                }
                else if(res.data.status == 'fail'){
                  this.loginFlag = true;
                }
                else{
                  this.forbidden = true;
                }
            })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";


</style>