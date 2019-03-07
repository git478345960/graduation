<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import index from '@/components/index/index';
export default {
  name: 'App',
}
</script>

<style >
  *{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
  }

  .experienceWrap .el-collapse-item__header{
    font-size:20px;
    font-weight:800;
}
.formMessage .el-form-item{
  margin-bottom:20px;
}
.formMessage .el-textarea__inner{
  height:200px;
}
</style>
