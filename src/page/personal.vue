<template>
<div class = "personalGuider">
  <el-container>
  <el-header height="35px" width="1190px">
    <topNav />
  </el-header>
  <el-main width="542px">
    <guider />
    <div class="personalWrap">
          <div class="personalContent">
              <el-col :span="18" class="contentLeft">
                <el-row class="message">
                  <el-col :span="6" class="messageImg">
                    <img src="@/assets/logo2.jpg" alt="">
                    </el-col>
                  <el-col :span="18" class="messageContent">
                    <el-row><span>name</span>
                    <el-button type="primary" icon="el-icon-edit" circle class="button"></el-button>
                    </el-row>
                    <el-row><span>性别/年龄</span></el-row>
                    <el-row><span>手机/邮箱</span></el-row>
                  </el-col>
                </el-row>
                <el-row class="introduce">
                  <h1>自我描述</h1>
                  <p>a发沙发大声道撒发sdfa发沙发大道撒发sdfa发沙发大道撒发sdfa发沙发大道撒发sdfa发沙发sdfas发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯发沙发sdfasfsdasa算法法师打发斯fsdasa算法法师打发斯蒂芬大事发生打法是否大道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdfa发沙发大声道撒发sdf</p>
                  </el-row>
                <el-row class="home">
                  <h1>社交主页</h1>
                  <p>asassas</p>
                </el-row>
                <el-row class="picture">
                  <h1>项目经历</h1>
                  <p>asassas</p>
                </el-row>
              </el-col>
              <el-col :span="5" class="contentRight">
                  <img src="@/assets/logo.jpg" alt=""><img src="@/assets/logo.jpg" alt="">
              </el-col>
          </div>
    </div>
  </el-main>
  <el-footer height="308px">
    <foot />
  </el-footer>
</el-container>
   <div class="formMessage"></div>
</div>



</template>

<script>
import topNav from '@/components/header/topNav';
import searchBar from '@/components/header/searchBar';
import guider from '@/components/header/guider';
import showContent from '@/components/content/showContent';
import foot from '@/components/foot/foot';
export default{
  components:{
    topNav,
    searchBar,
    guider,
    showContent,
    foot,


  }
}
</script>

<style  lang = "scss" scoped>
*{
  margin:0;
  padding:0;
}
.personalGuider{
  .personalWrap{
    height:852px;
    .personalContent{
      width:1300px;
      margin:0 auto;
      height:850px;
      border:1px solid #bfb2b2;
      margin-top:40px;
      background: #FAFAFA;
      .contentLeft{
        padding:45px;
        h1{
            margin-bottom:5px;
          }
          p{
            margin-left:90px;
          }
        .message{
          padding:30px;
          height:205px;
          border:1px solid #ccbbbb;
          min-height:205px;
          .messageImg{
            /* margin-right:20px; */
            height:100%;
            img{
              height:100%;
              width:100%;
            }
          }
          .messageContent{
            padding-left:30px;
            position: relative;
            .button{
              position: absolute;
              top:50%;
              right:0px;
              z-index:888;
            }
          }
        }
        .introduce{
          padding:30px;
          min-height:205px;
          border:1px solid #ccbbbb;
          
        }
        .home{
          padding:30px;
          min-height:100px;
          border:1px solid #ccbbbb;
        }
        .picture{
          padding:30px;
          min-height:205px;
          border:1px solid #ccbbbb;
        }
      }
      .contentRight{
        /* border:1px solid #ccbbbb; */
        margin-top:40px;
        min-height:800px;
        img{
          width:270px;
          height:400px;
        }
      }
    }
  }
  .formMessage{
    position: fixed;
    width:800px;
    height:600px;
    top: 171px;
    left: 180px;
    right:0;
    bottom:0;
    border:1px solid black;
    z-index:1000;
    background-color: #fff;
  }
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
