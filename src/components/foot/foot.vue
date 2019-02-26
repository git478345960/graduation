<template>
  <el-container class ="topWrap">
    <el-header style="height:90px;">
      <friendLink />
    </el-header>
    <el-main style ="height:192px;">
      <footMessage />
    </el-main>
  </el-container>
</template>

<script>
import footMessage from '@/components/foot/footMessage';
import friendLink from '@/components/foot/friendLink';
export default {
  components:{
    footMessage,
    friendLink
  }
};
</script>

<style>
 .el-header, .el-footer {
    background-color: #F2F5F4;
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
  
  /* body > .el-container {
    margin-bottom: 40px;
  } */
  

</style>
</style>
<style lang="scss" scoped>
    .topWrap{
      margin-top:15px;
    }
</style>

