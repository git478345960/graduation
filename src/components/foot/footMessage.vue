<template>
  <div class="footMessage">
    <el-row class="footRow">
      <el-col :span="8">
        <dl>
          <dt>投诉举报热线</dt>
          <dd>违法和不良信息举报电话：4006018900</dd>
          <dd>举报邮箱：tousujubao@meituan.com</dd>
        </dl>
      </el-col>
      <el-col :span="8">
        <dl>
          <dt>用户帮助</dt>
          <dd><a href="https://www.lagou.com/privacy.html">用户服务隐私</a></dd>
          <dd><a href="https://www.lagou.com/qa.html?t=1">帮助中心</a></dd>
          <dd><a href="#">隐私政策</a></dd>
        </dl>
      </el-col>
      <el-col :span="8">
        <dl>
          <dt>联系方式</dt>
          <dd>服务热线：4006 2828 35 (9:00 -18:00)</dd>
          <dd>企业服务邮箱：cc@lagou.com</dd>
          <dd>联系我们</dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footMessage {
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  .footRow {
    height: 100%;
    // border: 1px solid black;
    dl {
    //   border: 1px solid black;
      dt {
        font-size: 18px;
        font-weight: 600;
        color: #555;
        margin-bottom: 20px;
      }
      dd {
          margin-bottom:10px;
          
      }
    }
  }
}
</style>