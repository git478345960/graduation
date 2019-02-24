<template>
<div>
    <top-nav />
    <guider />
    <searchBar />
    <show-content />
    <foot />
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

<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
</style>
