<template>
  <div class="typeWrap">
    <div class="rowWrap">
      <el-row class="rowList">
        <dl>
          <dt>家教</dt>
          <dd v-for="(item,index) in listData.domestic" :key="index" :value="index">{{item.job}}</dd>
        </dl>
        <div class="icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-row>
      
      <el-row class="rowList">
        <dl>
          <dt>店员</dt>
          <dd v-for="(item,index) in listData.assistant" :key="index" :value="index">{{item.job}}</dd>
        </dl>
        <div class="icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-row>
      <el-row class="rowList">
        <dl>
          <dt>派送</dt>
          <dd v-for="(item,index) in listData.post" :key="index" :value="index">{{item.job}}</dd>
        </dl>
        <div class="icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-row>
      <el-row class="rowList">
        <dl>
          <dt>写作</dt>
          <dd v-for="(item,index) in listData.cake" :key="index" :value="index">{{item.job}}</dd>
        </dl>
        <div class="icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-row>
      <el-row class="rowList">
        <dl>
          <dt>创作</dt>
          <dd v-for="(item,index) in listData.seller" :key="index" :value="index">{{item.job}}</dd>
        </dl>
       <div class="icon">
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: {
        domestic: [
          { type: "家教", job: "英语家教" },
          { type: "家教", job: "数学家教" },
          { type: "家教", job: "物理家教" }
        ],
        assistant: [
          { type: "店员", job: "蛋糕店店员" },
          { type: "店员", job: "fs店店员" },
          { type: "店员", job: "fe店店员" }
        ],
        post: [
          { type: "店员", job: "gasdfg店店员" },
          { type: "店员", job: "sadf店店员" },
          { type: "店员", job: "fg店店员" }
        ],
        cake: [
          { type: "店员", job: "ter店店员" },
          { type: "店员", job: "蛋er店店员" },
          { type: "店员", job: "hg店店员" }
        ],
        seller: [
          { type: "店员", job: "er店店员" },
          { type: "店员", job: "gfd店店员" },
          { type: "店员", job: "asd店店员" }
        ]
      }
    };
  }
};
</script>

<style lang = "scss" scoped>
@import "@/assets/css/content/typeList.scss";
</style>