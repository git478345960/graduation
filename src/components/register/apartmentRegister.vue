<template>
  <div class="content" @keydown="lost">
    <el-input v-model="username" placeholder="请输入需要设置的公司账号" class="rAccount"></el-input>
    <el-input v-model="passWord" placeholder="请输入密码" class="rPassWord" type="password"></el-input>
    <el-input v-model="sePassWord" placeholder="请再次输入密码" class="sePassWord" type="password"></el-input>

    <el-row class="btn">
      <el-button type="primary" @click="submit">立即注册</el-button>
    </el-row>
    <el-row v-if="registerFlag" class="error">该用户已存在</el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      username: "",
      passWord: "",
      sePassWord: "",
      registerFlag: false
    };
  },
  methods: {
    submit() {
      api
        .apartUserRegister({
          userName: this.username,
          password: this.passWord
        })
        .then(res => {
          if (res.data.status == "success") {
            this.$message({
              showClose: true,
              message: "恭喜你，你已经成功注册,正在跳转到登录页面",
              type: "success"
            });
            let t;
            let that = this;
            clearTimeout(t);
            t = setTimeout(function() {
              console.log(that.$router);
              that.$router.push({ name: "login" }); //跳转哪一个路由
            }, 2000);
          }
          if (res.data.status == "fail") {
              this.registerFlag = true;
            }
        });
    },
    lost() {
      this.registerFlag = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/login.scss";
.error {
  text-align: center;
  color: red;
}
</style>