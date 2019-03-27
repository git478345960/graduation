<template>
  <div class="searchWrap">
    <el-container>
      <el-header height="236px" width="1190px">
        <topNav/>
        <guider/>
      </el-header>
      <el-main class="searchDetail">
        <el-row class="searchBox">
          <el-row class="detailTop">
            <el-row class="company">{{dataList.name}}</el-row>
            <el-row class="hiring">{{dataList.hiring}}</el-row>
            <el-row class="treatment">{{dataList.treatment}}-{{dataList.treatment + 2}}k</el-row>
            <el-row class="holdOn">
              <button :plain="true" @click="open"><span v-if="deliver ==false" >投个简历</span><span v-else>已投递</span></button>
            </el-row>
          </el-row>
          <el-row>
            <el-col :span="18" class="colDetail">
              <el-row style="min-height:200px;">
                <h4 class="detailTitle">任职要求:</h4>
                <p v-for="(item,index) of dataArray.requirements" :key=index>{{index+1}}.{{item}}。</p>
              </el-row>
              <el-row style="min-height:200px;">
                <span class="detailTitle">职位描述:</span>
                <p v-for="(item,index) of dataArray.responsibility" :key=index>{{index+1}}.{{item}}。</p>
              </el-row>
              <el-row style="min-height:200px;">
                <span class="detailTitle">工作地址:</span>
                <p>{{dataList.location}}</p>
              </el-row>
            </el-col>
            <el-col :span="6" class="colDetail colDetailRight">
              <el-row class="rightDetail">
                <p>{{dataList.companyMessage}}</p>
              </el-row>
            </el-col>
          </el-row>
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
      id:this.$route.params.id,
      userKey: this.$route.params.userKey,
      dataArray:{
          requirements:[],
          responsibility:[],
      },
      deliver:false,
    };
  },
  components: {
    topNav,
    searchBar,
    foot,
    guider
  },
  methods:{
      open() {
        api.summitResume({
          id:this.id,
          userKey:this.userKey
        }).then(res=>{
          this.deliver = true;
          this.$message({
          message: '恭喜你，投递成功',
          type: 'success'
        });
        })
        
      },
  },
  created:function(){
    api.getPartTimeInfo({id:this.id})
            .then(res => {
                if(res.status === 200){
                    this.dataList = res.data;
                    [...this.dataArray.requirements] = this.dataList.requirement ?this.dataList.requirement.split('。').slice(0,-1) : this.dataList.requirement;
                    [...this.dataArray.responsibility] = this.dataList.responsibility ? this.dataList.responsibility.split('。').slice(0,-1) :this.dataList.responsibility;
                }
               
            })
  }
};
</script>

<style lang = "scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.searchWrap {
  .searchDetail {
    width: 100%;
    /* margin: 0 auto; */
    background-color: #f2f5f4;
    /* padding: 10px; */
    .searchBox {
      width: 1300px;
      margin: 0 auto;
      border-top: 1px solid #b5acac;
      .detailTop {
        position: relative;
        background-color: #f2f5f4;
        padding: 10px;
        .company {
          margin: -2px 0 8px 0;
          font-size: 14px;
          color: #555;
        }
        .hiring {
          height: 36px;
          font-size: 36px;
          color: #333;
          line-height: 36px;
          margin-bottom: 15px;
        }
        .treatment {
          font-size: 18px;
          color: #555;
          margin-bottom: 8px;
        }
        .holdOn {
          width: 134px;
          height: 44px;
          position: absolute;
          right: 20%;
          top: 50%;
          margin-top: -23px;
          border-radius: 5px;
          button {
            display: inline-block;
            height: 100%;
            width: 100%;
            color: #fff;
            background-color: #00b38a;
            border: 1px solid #00b38a;
            border-radius: 3px;
            line-height: 44px;
            font-size: 18px;
            cursor: pointer;
          }
        }
      }
      .colDetail {
        border-top: 1px solid #b5acac;
        /* border: 1px solid black; */
        padding: 10px;
        min-height: 300px;
        .rightDetail {
          /* border-left:1px solid #b5acac; */
          padding: 20px;
          p {
            font-size: 21px;
          }
        }
        .detailTitle {
          font-size: 18px;
          font-weight: 700;
          color: #333;
          line-height: 16px;
          margin-bottom: 22px;
          margin-top: 5px;
          
        }
        p{
            padding-left:80px;
            margin-top: 13px;
           color: #333;
          }
      }
      .colDetailRight {
        border-left: 1px solid #b5acac;
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
