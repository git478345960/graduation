<template>
  <div class="guiderWrap">
    <div class="guider">
      <ul class="guiderList">
        <li>
          <router-link :to="{name:'home'}">主页</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link :to="{name:'experience'}">面试心得</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link :to="{name:'attention'}">注意事项</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link :to="{name:'notification'}">消息通告</router-link>
        </li>
      </ul>
    </div>
    <div class="serchBarWrap">
         <searchBar/>
    </div>
    <div class="contentshow">
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
