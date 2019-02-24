<template>
    <div class="guider"> 
        <ul class = "guiderList">
          <li>
            <router-link :to="{path: '/'}">主页</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link :to="{path: '/'}">面试心得</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link :to="{path: '/'}">注意事项</router-link>
          </li>
          <li>|</li>
          <li>
            <router-link :to="{path: '/'}">成功例子</router-link>
          </li>
          
        </ul>
    </div>

</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
  .guider{
    width:100%;
    height:56px;
    background-color:#6a7682;
    .guiderList{
      width:800px;
      height:100%;
      margin:0 auto;
      li{
        color:#fff;
        float:left;
        margin-right:30px;
        font-size:23px;
        line-height:56px;
        a{
          color:#fff;
          text-decoration:none;
        }
      }
    }
  }

</style>
