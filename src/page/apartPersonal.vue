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
                  <el-row>
                    <span>姓名: {{form.name}}</span>
                  </el-row>
                  <el-row>
                    <span>性别: {{form.sex}} 出生年月:{{form.birthday}}</span>
                  </el-row>
                  <el-row>
                    <span>手机：{{form.phone}} 邮箱：{{form.email}}</span>
                  </el-row>
                </el-col>
              </el-row>
              <el-row class="introduce">
                <h1>自我描述</h1>
                <p>{{form.introduction}}</p>
              </el-row>
              <el-row class="picture">
                <h1>项目经历</h1>
                <p>{{form.content}}</p>
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
  </div>
</template>

<script>
import api from "@/api/index.js";
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
      form: {},
      form2: {},
      showFlag: false,
      blackShow:false,
      id:this.$route.query.id,
      userKey:this.$route.query.userKey
    };
  },
  methods: {
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
    getResume() {
      api.getResumes({ id: this.id }).then(res => {
        if (res.status === 200) {
          this.form = Object.assign({}, res.data);
          this.form2 = Object.assign({}, this.form);
        }
      });
    },
    formatTen(num) {
      return num > 9 ? num + "" : "0" + num;
    },
    formatDate(date) {
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      return year + "-" + this.formatTen(month) + "-" + this.formatTen(day);
    }
  },
  created: function() {
    this.getResume();
  },
};
</script>

<style  lang = "scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.personalGuider {
  .personalWrap {
    height: 852px;
    .personalContent {
      width: 1300px;
      margin: 0 auto;
      height: 850px;
      border: 1px solid #bfb2b2;
      margin-top: 40px;
      background: #fafafa;
      .contentLeft {
        padding: 45px;
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
          min-height: 205px;
          border: 1px solid #ccbbbb;
        }
        .home {
          padding: 30px;
          min-height: 100px;
          border: 1px solid #ccbbbb;
        }
        .picture {
          padding: 30px;
          min-height: 295px;
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
    z-index: 1050;
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
