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
                    <h1>companyName</h1>
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      circle
                      class="button"
                      @click="show"
                    ></el-button>
                  </el-row>
                  <el-row style="margin-bottom:15px;">
                    <span>name</span>
                  </el-row>
                  <el-row style="margin-bottom:15px;">
                    <span>性别/联系方式</span>
                  </el-row>
                </el-col>
              </el-row>
              <el-row class="introduce">
                <h1>公司信息</h1>
                <p>a发沙发大声道撒发sdfa发沙发大道撒发sdfa发沙发大道撒发sdfa发沙发大道撒发sdfa发沙发sdfas发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯fsdasa算法法师打发斯蒂芬大事发生打法是否大道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdf</p>
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
    <div class="formMessage" v-show="form.show">
      <el-form ref="form" :model="form" label-width="80px" class="formBox">
        <el-form-item label="公司名字">
          <el-col :span="10">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="3" class="formStyle">性别</el-col>
          <el-radio-group v-model="form.sex" size="medium">
            <el-radio border label="男"></el-radio>
            <el-radio border label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机">
          <el-col :span="10">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="姓名">
          <el-col :span="10">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="公司信息">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="elButton">立即创建</el-button>
          <el-button class="elButton" @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="modal-backdrop" v-show="form.show"></div>
  </div>
</template>

<script>
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
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        desc2: "",
        sex: "男",
        show: false
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    show() {
      this.form.show = true;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    cancel() {
      this.form.show = false;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    }
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
