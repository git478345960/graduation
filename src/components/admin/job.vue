<template>
  <div class="apartmentWrap">
    <div class="apartmentContent">
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
        <el-table-column label="招聘岗位" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.hiring }}</span>
          </template>
        </el-table-column>
        <el-table-column label="薪水" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.treatment }}k</span>
          </template>
        </el-table-column>
        <el-table-column label="地址" width="380">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.location }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" >
            <el-button v-if="keyFlag" size="mini" type="success" @click="handleRead(scope.$index, scope.row)">查看详情</el-button>
            <el-button v-else size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="text-align:center;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </el-row>
    </div>
  </div>
  
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
      newData:{
        title:'',
        content:''
      },
      nowData:{},
      showFlag: false,
      editorFlag:false,
      keyFlag:false,
    };
  },
  methods: {
    handleEdit(index, row) {
      this.nowData = Object.assign({},row);
      this.editorFlag = true;

      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动

    },
    handleRead(index, row){
      this.$router.push({name:'searchDetail',params:{userKey:this.$route.params.userKey,id:row.id}});
    },
    handleDelete(index, row) {
      // console.log(removeMessageInfo(row.id));
      api.removePartTimeInfo({id:row.id})
      .then(res=>{
        [...this.tableData] = res.data;
      })
    },
     handleSizeChange: function(size) {
    this.pagesize = size;
    // console.log(this.pagesize)  //每页下拉显示数据
  },
  handleCurrentChange: function(currentPage) {
    this.currentPage = currentPage;
    // console.log(this.currentPage)  //点击第几页
  }
    
  },
  
  created: function() {
    this.keyFlag = this.$route.params.userKey ? true : false;
    api.getPartTimeInfos().then(res => {
      if (res.status === 200) {
        [...this.tableData] = res.data;
      }
    });
  },
 
};
</script>
<style lang = "scss" scoped>
.apartmentWrap {
  width: 1300px;
  min-height: 610px;
  margin: 0 auto;
  .apartmentContent {
    position: relative;
    /* border: 1px solid black; */
    min-height: 610px;
    .publicButton{
      position: absolute;
      right:10px;
      top:3px;

    }
  }
  .contentBox {
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .formMessage{
    position: fixed;
    width: 800px;
    min-height: 600px;
    top: 50%;
    margin-top: -350px;
    left: 50%;
    margin-left: -400px;
    border-radius: 20px;
    padding:40px;
    /* border: 1px solid black; */
    z-index: 1050;
    background-color: #fff;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    opacity: 0.5;
  }
}
</style>
