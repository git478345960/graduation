<template>
  <div class="searchWrap">
    <el-container>
      <el-header height="236px" width="1190px">
        <topNav/>
        <guider/>
      </el-header>
      <el-main width="542px">
        <el-row class="searchContent">
          <ul>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li class="oneContent">
              <el-row class="firstRow">
                <el-col :span="12" class="firstLeft colContent" >left</el-col>
                <el-col :span="12" class="firstRight colContent">right</el-col>
              </el-row>
              <el-row class="secRow">
                <el-col :span="12" class="secLeft colContent">left</el-col>
                <el-col :span="12" class="secRight colContent">right</el-col>
              </el-row>
            </li>
            <li style="text-align:center;color:red">分页区（暂定)</li>
          </ul>
        </el-row>
      </el-main>
      <el-footer height="308px">
        <foot/>
      </el-footer>
    </el-container>
  </div>
</template>

<script scoped>
import topNav from "@/components/header/topNav";
import searchBar from "@/components/header/searchBar";
import foot from "@/components/foot/foot";
import guider from "@/components/header/guider";
export default {
  data(){
    return {
      dataList : [
        {
          
        }
      ]
    }
  },
  components: {
    topNav,
    searchBar,
    foot,
    guider
  }
};
</script>

<style lang = "scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.searchWrap {

  .searchContent {
    width: 1190px;
    margin: 0 auto;
    /* padding: 10px; */
    
    .oneContent{
      border: 1px solid #ededed;
      padding:10px;
      .firstRow{
        height:34px;
      }
      .secRow{
        height:24px;
      }
      .colContent{
        height:100%;
      }
    }
  }
}
.el-header,
.el-footer {
  /* background-color: #B3C0D1; */
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  min-height: 200px;
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
