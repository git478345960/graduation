<template>
<div class = "wrapGuider">
  <el-container>
  <el-header height="35px" width="1190px">
    <topNav />
  </el-header>
  <el-main width="542px">
    <adminGuider />
  </el-main>
  <el-footer height="308px">
    <foot />
  </el-footer>
</el-container>
</div>



</template>

<script>
import topNav from '@/components/header/topNav';
import searchBar from '@/components/header/searchBar';
import adminGuider from '@/components/header/adminGuider';
import showContent from '@/components/content/showContent';
import foot from '@/components/foot/foot';

export default{
  components:{
    topNav,
    searchBar,
    adminGuider,
    showContent,
    foot,


  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
  .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
