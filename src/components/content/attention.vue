<template>
  <div class="experienceWrap">
    <div class="logo">
      <h2>注意事项</h2>
      <h3>让注意力更集中</h3>
    </div>
    <div class="experienceContent">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="1.确认兼职时间和待遇。" name="1" class="activeContent">
          <div>跟店面老板见面后一定要跟ta确定好工作的时间段和天数，是否有加班的可能性，待遇如何，有无加班工资等等。</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="2.确认具体工作。" name="2" class="activeContent">
          <div>问清楚老板我们的具体工作是什么？免得到时候出现做的事情比预期的多得多的现象。</div>
          <div>也能够知道自己应该负责哪些东西，不会到时候手忙脚乱。</div>
        </el-collapse-item>
        <el-collapse-item title="3.问清楚工资的发放方式。" name="3" class="activeContent">
          <div>是日结还是月结，是给现金还是怎么样。这个一定得约定好。</div>
          <div>一些东西有必要在一开始就提出来，防止后面在金钱结算方面给双方找不愉快</div>
        </el-collapse-item>
        <el-collapse-item title="4.辨别培训机构" name="5" class="activeContent" >
          <div>凡是带有项目基地、人才基地、孵化基地、XX中心，创业基地、园林、人才服务等字眼的绝逼是培训机构；那些包含XX教育，XX网络，XX软件，XX国际的也极有可能是培训机构。</div>
          <div>同一招聘网站中有大量此公司的招聘信息，各种求职网站都有该家公司的招聘信息，招聘信息几乎每天定点更新，绝逼是培训机构。</div>
          <div>凡是带有助理，助手、人才、学徒的绝逼也是培训机构。招大量实习生的也极有可能是培训机构。</div>
          <div>要你交押金、保证金什么的基本不是培训机构就是骗钱的。</div>
        </el-collapse-item>
        <el-collapse-item title="5.最好确保几天实习期。" name="6" class="activeContent">
          <div>虽说只是个兼职，日结倒还好说，月结的话，要是工作比我们想象中以及和老板口中的情况严重不符，出现要辞职的情况，双方都会很为难的。所以大家找兼职的时候要是工作的时间段会比较长，小编建议还是先做几天试试，看看自己能否胜任。</div>
        </el-collapse-item>
        <el-collapse-item title="6.最好签协议。" name="7" class="activeContent">
          <div>为了保障双方的利益，避免对方随便赖账，小编建议最好签一个协议。以免出现做了工作老板却赖账的情况。</div>
          <div>如果签了协议对方赖账方便维权。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {}
};
</script>

<style lang = "scss" scoped>

.experienceWrap {
  width: 1300px;
  min-height: 450px;
  margin: 0 auto;
  .logo {
    min-width: 1024px;
    height: 125px;
    padding-top: 35px;
    background: #100f06
      url(//www.lgstatic.com/www/static/community/modules/index/banner/img/banner-bg_21a3371.jpg)
      center center no-repeat;

    h2 {
      margin: 0 auto;
      margin-bottom: 6px;
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
      color: #fff;
      text-align: center;
    }
    h3 {
      margin-bottom: 4px;
      font-size: 26px;
      line-height: 36px;
      color: #fff;
      text-align: center;
    }
  }
  .experienceContent {
    min-height: 450px;
    background-color: #fff;
    padding:10px;
    font-size: 20px !important;
    .activeContent{
      font-size:20px;
      div{
      padding-left:30px;
      font-size:18px;
      }
    }

 
    /* ul { */
      /* li {
        float: left;
        width: 627px;
        height: 100px;
        padding: 10px;
        margin-bottom: 2px;
        margin-right: 2px;
        /* border-bottom:1px dashed grey; */
        /* border-right: 1px dashed grey; 
        h1 {
          padding: 5px;
          color: #333;
          padding: 5px;
          &:hover {
            color: #00b38a;
          }
        }
        p {
          max-height: 88px;
          color: #555;
          padding: 10px;
          overflow: hidden;
          text-overflow: ellipsis; */
          /* white-space: nowrap; */
        /* }
      }
    } */
  }
}
</style>
