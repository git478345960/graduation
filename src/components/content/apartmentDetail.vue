<template>
  <div class="apartmentWrap">
    <div class="apartmentContent">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
      >
        <el-table-column label="名字" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.phone }}k</span>
          </template>
        </el-table-column>
        <el-table-column label="生日" width="380">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.birthday }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleRead(scope.$index, scope.row)">查看</el-button>
            <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
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
      newData: {
        title: "",
        content: ""
      },
      nowData: {},
      showFlag: false,
      editorFlag: false,
      saveKey: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      this.nowData = Object.assign({}, row);
      console.log(index, row);
      this.editorFlag = true;

      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    handleDelete(index, row) {
      console.log(index, row);
      // console.log(removeMessageInfo(row.id));
      api.removePartTimeInfo({ id: row.id }).then(res => {
        this.getData();
      });
    },
    handleRead(index, row) {
      console.log(row);
      let routeData = this.$router.resolve({
        name: "apartPersonal",
        query: { id: row.id }       
      });
      window.open(routeData.href, '_blank');
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
      // console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      // console.log(this.currentPage)  //点击第几页
    },
    show() {
      this.showFlag = true;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    cancel() {
      this.showFlag = false;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },
    cancelEditor() {
      this.editorFlag = false;
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },

    getData() {
      api
        .getResumes({
          saveKey: this.saveKey
        })
        .then(res => {
          if (res.status === 200) {
            [...this.tableData] = res.data;
          }
        });
    }
  },

  created: function() {
    console.log(this.$route.params.userKey);
    this.saveKey = this.$route.params.saveKey;
    this.getData();
  }
};
</script>
<style lang = "scss" scoped>
.apartmentWrap {
  width: 1300px;
  height: 610px;
  margin: 0 auto;
  .apartmentContent {
    position: relative;
    /* border: 1px solid black; */
    height: 610px;
    .publicButton {
      position: absolute;
      right: 10px;
      top: 3px;
    }
  }
  .contentBox {
    padding-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .formMessage {
    position: fixed;
    width: 800px;
    min-height: 600px;
    top: 50%;
    margin-top: -350px;
    left: 50%;
    margin-left: -400px;
    border-radius: 20px;
    padding: 40px;
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
.item {
  margin-top:10px;
  margin-right: 10px;
}
</style>
