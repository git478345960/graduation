<template>
  <div class="searchWrap">
    <el-container>
      <el-header height="236px" width="1190px">
        <topNav/>
        <guider/>
      </el-header>
      <el-main width="542px">
        <el-row class="searchContent" :data="dataList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <router-link
            class="contentBox"
            v-for="(item,index) in dataList"
            :key="index"
            :to="{name: 'searchDetail', params: {hiring: item.hiring}}"
            prop="date"
          >
            <el-row>
              <el-col :span="12">
                <h3>{{item.hiring}}</h3>
              </el-col>
              <el-col :span="12">{{item.companyName}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="12"><span class="treatment">{{item.treatment}}-{{item.treatment+2}}k</span><span>{{item.location}}</span></el-col>
              <el-col :span="12">{{item.companyMessage}}</el-col>
            </el-row>
          </router-link>
        </el-row>
        <el-row style="text-align:center;" >
          <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 40]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="dataList.length">  
                    </el-pagination>
        </el-row>
      </el-main>
      <el-footer height="308px">
        <foot/>
      </el-footer>
    </el-container>
  </div>
</template>

<script scoped>
import api from "@/api/index.js";
import topNav from "@/components/header/topNav";
import searchBar from "@/components/header/searchBar";
import foot from "@/components/foot/foot";
import guider from "@/components/header/guider";
export default {
  data() {
    return {
      hiring: "",
      dataList: [],
      currentPage:1, //初始页
      pagesize:5,    //    每页的数据
    };
  },
  components: {
    topNav,
    searchBar,
    foot,
    guider
  },
  created: function() {
    this.hiring = this.$route.params.hiring;
    api.getPartTimeInfos({ hiring: this.hiring }).then(res => {
      if (res.status === 200) {
        [...this.dataList] = res.data;
      }
    });
  },
  methods:{
    // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
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
    width: 1300px;
    margin: 0 auto;
    .contentBox {
      float: left;
      width: 1227px;
      height: 80px;
      padding: 10px;
      margin-bottom: 2px;
      margin-right: 2px;
      border-bottom: 1px dashed grey;
      border-right: 1px dashed grey;
      border-left: 1px dashed grey;
      text-decoration: none;
      .el-col {
        height: 40px;
        h3 {
          float: left;
          max-width: 272px;
          margin: 0;
          font-size: 20px;
          color: #00b38a;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          font-weight: 400;
        }
        .treatment{
              margin-right: 1em;
              font-size: 16px;
              color: #fd5f39;
        }
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
