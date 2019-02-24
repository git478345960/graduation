<template>
  <div class="sliderWrap">
    <el-carousel :interval="5000" arrow="hover">
      <el-carousel-item v-for="(item,index) in imgUrl" :key="item + '_' + index">
        <el-row class = "imgWrap">
            <img :src="item.idView">
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
                {idView : require('@/assets/logo.jpg')},
                {idView : require('@/assets/logo2.jpg')},
                {idView : require('@/assets/logo3.png')}
            ],
           
        }
    }
};
</script>


<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
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
