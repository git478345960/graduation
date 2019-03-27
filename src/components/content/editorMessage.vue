<template>
  <div class="personalGuider">
    <el-container>
      <el-main width="542px">
        <div class="personalWrap">
          <div class="personalContent">
            <el-col :span="18" class="contentLeft">
              <el-row class="message">
                <el-col :span="6" class="messageImg">
                  <img src="@/assets/logo2.jpg" alt>
                </el-col>
                <el-col :span="18" class="messageContent">
                  <el-row style="margin-bottom:10px;">
                    <h1>公司名字：{{data.companyName}}</h1>
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      circle
                      class="button"
                      @click="show"
                    ></el-button>
                  </el-row>
                  <el-row style="margin-bottom:15px;">
                    <span>员工名字：{{data.name}}</span>
                  </el-row>
                  <el-row style="margin-bottom:15px;">
                    <span>性别：{{data.sex}}/联系方式：{{data.phone}}</span>
                  </el-row>
                </el-col>
              </el-row>
              <el-row class="introduce">
                <h1>公司信息</h1>
                <p v-for="(item,index) of companyInfoArray" :key="index" style="padding-bottom:10px;">{{index+1}}.{{item}}。</p>
              </el-row>
            </el-col>
            <el-col :span="5" class="contentRight">
              <img src="@/assets/logo.jpg" alt>
              <img src="@/assets/logo.jpg" alt>
            </el-col>
          </div>
        </div>
      </el-main>
      <el-footer height="308px">
        <foot/>
      </el-footer>
    </el-container>
    <div class="formMessage" v-show="showFlag">
      <el-form ref="form" :model="nowData" label-width="80px" class="formBox">
        <el-form-item label="公司名字">
          <el-col :span="10">
            <el-input v-model="nowData.companyName"></el-input>
          </el-col>
          <el-col :span="3" class="formStyle">性别</el-col>
          <el-radio-group v-model="nowData.sex" size="medium">
            <el-radio border label="男"></el-radio>
            <el-radio border label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机">
          <el-col :span="10">
            <el-input v-model="nowData.phone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="姓名">
          <el-col :span="10">
            <el-input v-model="nowData.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公司信息">
          <el-input type="textarea" v-model="nowData.companyInfo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="elButton">立即修改</el-button>
          <el-button class="elButton" @click="cancel">取消修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="modal-backdrop" v-show="showFlag"></div>
  </div>
</template>

<script>
import api from '@/api/index.js'
import topNav from "@/components/header/topNav";
import searchBar from "@/components/header/searchBar";
import guider from "@/components/header/guider";
import showContent from "@/components/content/showContent";
import foot from "@/components/foot/foot";
export default {
  components: {
    topNav,
    searchBar,
    guider,
    showContent,
    foot
  },
  data() {
    return {
      nowData:{},
      data:{},
      userKey: "",
      showFlag:false,
      companyInfoArray :[],
      userKey:'',
    };
  },
  methods: {
    onSubmit() {
      api.modifyApartUser({
          apartKey: this.userKey,
          name: this.nowData.name,
          companyName: this.nowData.companyName,
          companyInfo: this.nowData.companyInfo,
          sex: this.nowData.sex,
          phone: this.nowData.phone,
      }).then(res =>{
        this.getData();

      })
      this.cancel();
    },
    show() {
      this.showFlag = true;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    cancel() {
      this.showFlag = false;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },
    getData(){
      api.
          getApartUser({
            apartKey:this.userKey
          })
          .then(res=>{
            this.data = Object.assign({},res.data);
            this.nowData = Object.assign({},res.data);
            this.companyInfoArray = this.data.companyInfo ? this.data.companyInfo.split('。').slice(0,-1) : this.data.companyInfo;
          })
    }
  },
  created:function(){
    this.userKey = this.$route.params.userKey;
    this.getData();
    // console.log(this.companyInfoArray);
  }
};
</script>

<style  lang = "scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.personalGuider {
  .personalWrap {
    min-height: 852px;
    .personalContent {
      width: 1300px;
      margin: 0 auto;
      min-height: 850px;
      border: 1px solid #bfb2b2;
      margin-top: 40px;
      background: #fafafa;
      .contentLeft {
        padding: 45px;
        min-height: 850px;
        h1 {
          margin-bottom: 5px;
        }
        p {
          margin-left: 90px;
        }
        .message {
          padding: 30px;
          height: 205px;
          border: 1px solid #ccbbbb;
          min-height: 205px;
          .messageImg {
            /* margin-right:20px; */
            height: 100%;
            img {
              height: 100%;
              width: 100%;
            }
          }
          .messageContent {
            padding-left: 30px;
            position: relative;
            .button {
              position: absolute;
              top: 50%;
              right: 0px;
              z-index: 888;
            }
          }
        }
        .introduce {
          padding: 30px;
          min-height: 505px;
          border: 1px solid #ccbbbb;
        }
        .home {
          padding: 30px;
          min-height: 100px;
          border: 1px solid #ccbbbb;
        }
        .picture {
          padding: 30px;
          min-height: 205px;
          border: 1px solid #ccbbbb;
        }
      }
      .contentRight {
        /* border:1px solid #ccbbbb; */
        margin-top: 40px;
        min-height: 800px;
        img {
          width: 270px;
          height: 400px;
        }
      }
    }
  }
  .formMessage {
    position: fixed;
    width: 800px;
    min-height: 600px;
    top: 50%;
    margin-top: -350px;
    left: 50%;
    margin-left: -400px;
    border-radius: 20px;
    /* border: 1px solid black; */
    z-index: 1041;
    background-color: #fff;
    .formStyle {
      text-align: right;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .formBox {
      padding: 50px;

      .elButton {
        width: 68px;
        height: 40px;
      }
    }
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    opacity: 0.5;
  }
}
.el-main {
  background-color: #e9eef3;
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
