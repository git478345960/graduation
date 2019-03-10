<template>
  <div class="sliderWrap">
    <el-carousel :interval="5000" arrow="hover" height="500px">
      <el-carousel-item v-for="(item,index) in imgUrl" :key="item + '_' + index">
        <el-row class = "imgWrap">
            <a :href="item.href" target="_blank"><img :src="item.idView" ></a>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return {
            imgUrl:[
                {idView : require('@/assets/demo1.jpg'),
                href:'https://activity.lagou.com/gracie/pc/promotion2019-city.html'
                },
                {idView : require('@/assets/demo2.png'),
                href:'https://kaiwu.lagou.com/course/courseInfo.htm?courseId=1&sid=3-PC_banner-0'
                },
                {idView : require('@/assets/demo3.jpg'),
                href:"https://activity.lagou.com/gracie/h5/promotion2019-main.html"}
            ],
           
        }
    }
};
</script>


<style scoped>
.imgWrap a{
  display: block;
  width: 100%;
  height:100%;
}
.el-carousel__item{
  height:500px;
}
div .el-carousel__container{
  height:500px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<style lang="scss" scoped>
    @import "@/assets/css/content/slider.scss"
</style>
