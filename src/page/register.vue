<template>
  <div class="registerWrap">
    <el-row class="top"></el-row>
    <el-row class="register">
      <el-row class="registerView">
        <el-col :span="12">
          <router-link
            class="nameList"
            style="font-size:18px;"
            :to="{name:'studentRegister',params:{name:'student'}}"
          >学生</router-link>
        </el-col>
        <el-col :span="12">
          <router-link
            class="nameList"
            style="font-size:18px;"
            :to="{name:'apartmentRegister',params:{name:'apartment'}}"
          >公司</router-link>
        </el-col>
      </el-row>
      <el-row class="registerContent">
        <router-view class="registerBox"></router-view>
      </el-row>
      <el-row class="register">
        <el-button type="success" class="registerBtn"><a href="http://localhost:8081/login/studentLogin">去登录</a></el-button>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.registerWrap {
  position: relative;
  .top {
    height: 360px;
    // border:1px solid black;
    background-color: #00b38a;
  }
  .register {
    // height:384px;
    position: absolute;
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    // margin-top:-150px;
    // z-index:999;
    background-color: #fff;
    border: 1px solid rgb(199, 187, 187);
    .registerView {
      height: 30px;
      width: 400px;
      text-align: center;
      margin: 0 auto;
      // border:1px solid black;
      z-index: 999;
      .nameList {
        color: #333;
      }
    }
    .registerContent {
      width: 400px;
      margin: 0 auto;
    }
    .register {
      width: 86px;
      float: right;
      margin-top: 107px;
      height: 14%;
      .registerBtn {
        float: right;
      }
    }
  }
}
</style>