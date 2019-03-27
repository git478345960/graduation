<template>
  <div class="experienceDetailWrap">
    <el-container>
      <el-header height="236px" width="1190px">
        <topNav/>
        <guider/>
      </el-header>
      <el-main width="542px">
        <el-row class="detailBox">
          <el-col :span="17" style="padding:40px;height:100%;">
            <el-row>
              <h1 style="text-align:center;">{{dataList.title}}</h1>
            </el-row>
            <el-row>
              <p class="contentBox" v-for="(item,index) in dataListArray" :key="index">&nbsp;&nbsp;&nbsp;&nbsp;{{item}}</p>
              <p style="text-align:right; padding-right:20px;">{{dataList.time}}</p>
            </el-row>
          </el-col>
          <el-col :span="6" style="padding:30px;height:700px; border-left:1px dashed grey;  ">
            <p style="font-weight:bold;margin-bottom:35px;">推荐阅读</p>
            <el-row>
              <router-link
                v-for="(item,index) in dataArray"
                :key="index"
                class="titleList"
                :to="{name:'experienceDetail',params:{id:item.id,userKey:userKey}}"
                @click.native = "reLoad"
                
              >{{item.title}}</router-link>
            </el-row>
          </el-col>
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
      dataList: {},
      dataArray: [],
      dataListArray: [],
      dataId:this.$route.params.id,
      userKey:this.$route.params.userKey,
    };
  },
  components: {
    topNav,
    searchBar,
    foot,
    guider
  },
  created: function() {
    console.log(this.userKey);
    api.getDetailExperience({ id: this.$route.params.id }).then(res => {
      //  console.log(res.data);
      this.dataList = res.data;
      this.dataListArray = this.dataList.content ? this.dataList.content.split('。').slice(0,-1) : this.dataList.content;
      // console.log(this.dataListArray);
    });
    api.getExperience().then(res => {
      [...this.dataArray] = res.data;
      // console.log(this.dataArray);
      let that = this;
      this.dataArray = this.dataArray.filter(function(ele, index) {
        if (ele.id !== that.$route.params.id) {
          return true;
        }
      });
    });
  },
  methods:{
    reLoad:function(){
      this.$router.go(0);  
    }
  }
};
</script>

<style lang = "scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.experienceDetailWrap {
  .detailBox {
    width: 1190px;
    margin: 0 auto;
    border: 1px solid black;
    min-height: 700px;
    .titleList {
      display: block;
      text-decoration: none;
      color: #333;
      margin-bottom: 25px;
      font-size: 20px;
      border-bottom:1px dashed grey;
      &:hover {
        font-size: 20px;
        color: #00b38a;
      }
    }
  }
  .contentBox {
    /* height:580px; */
    display: -webkit-box;
    font-size:18px;
    margin: 16px 0;
    
    
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
  min-height: 400px;
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
