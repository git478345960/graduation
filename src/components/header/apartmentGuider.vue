<template>
  <div class="guiderWrap">
    <div class="guider">
      <ul class="guiderList">
        <li>
          <router-link :to="{name:'oneNotification'}">主页</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link :to="{name:'apartment'}">兼职信息</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link :to="{name:'editorMessage'}">公司信息编辑</router-link>
        </li>
      </ul>
    </div>
    <div class="contentshow" style="min-height:450px;">
        <router-view></router-view>
    </div>
   
  </div>

  
</template>

<script scoped>
import searchBar from "@/components/header/searchBar";
export default {
  components:{
    searchBar,
  }
};
</script>

<style lang = "scss" scoped>
.guiderWrap{
  /* height:1490px; */
  .guider {
  width: 100%;
  height: 56px;
  background-color: #6a7682;
  .guiderList {
    width: 800px;
    height: 100%;
    margin: 0 auto;
    li {
      color: #fff;
      float: left;
      margin-right: 30px;
      font-size: 23px;
      line-height: 56px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
  .serchBarWrap{
    height:132px;
  }
}

</style>
