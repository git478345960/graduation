<template>
  <div class="showWrap">
    <el-container>
      <el-aside width="340px">
        <type-list />
      </el-aside>
      <el-main>
        <slider />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import typeList from "@/components/content/typeList";
import slider from "@/components/content/slider";
export default {
  components: {
    typeList,
    slider
  }
};
</script>

<style scoped>
.showWrap {
  width: 1300px;
  height: 540px;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid black;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;

}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;

}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  /* margin-bottom: 40px; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>




