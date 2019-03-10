<template>
  <div class="apartmentWrap">
    <div class="apartmentContent">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
      >
        <el-table-column label="招聘岗位" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.hiring }}</span>
          </template>
        </el-table-column>
        <el-table-column label="待遇" width="250">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.treatment }}k</span>
          </template>
        </el-table-column>
        <el-table-column label="地点" width="380">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span class="contentBox">{{ scope.row.location }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="handleRead(scope.$index, scope.row)">查看</el-button> -->
            <el-badge is-dot class="item">
              <el-button size="small" @click="handleRead(scope.$index, scope.row)">查看投递简历</el-button>
            </el-badge>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      <el-button class="publicButton" type="primary" @click="show">发布新兼职</el-button>
    </div>
    <div class="formMessage" v-if="showFlag">
      <el-form ref="form" :model="newData" label-width="80px" class="formBox">
        <el-form-item label="招聘岗位">
          <el-col :span="15">
            <el-input v-model="newData.hiring"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="待遇(k)">
          <el-col :span="15">
            <el-input v-model="newData.treatment"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-col :span="15">
            <el-input v-model="newData.location"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="任职要求">
          <el-input type="textarea" v-model="newData.requirement"></el-input>
        </el-form-item>
        <el-form-item label="职位责任">
          <el-input type="textarea" v-model="newData.responsibility"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="elButton">确认发布</el-button>
          <el-button class="elButton" @click="cancel">取消发布</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="formMessage" v-if="editorFlag">
      <el-form ref="form" :model="nowData" label-width="80px" class="formBox">
        <el-form-item label="招聘岗位">
          <el-col :span="15">
            <el-input v-model="nowData.hiring"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="待遇">
          <el-col :span="15">
            <el-input v-model="nowData.treatment"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-col :span="15">
            <el-input v-model="nowData.location"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="任职要求">
          <el-input type="textarea" v-model="nowData.requirement"></el-input>
        </el-form-item>
        <el-form-item label="职位责任">
          <el-input type="textarea" v-model="nowData.responsibility"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="editor" class="elButton">确认修改</el-button>
          <el-button class="elButton" @click="cancelEditor">取消修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="modal-backdrop" v-show="showFlag||editorFlag"></div>
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
      userKey: ""
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
      this.$router.push({
        name: "apartmentDetail",
        params: { userKey:this.$route.params.userKey,saveKey: row.saveKey }
      });
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
    editor() {
      api
        .modifyPartTimeInfo({
          id: this.nowData.id,
          apartKey: this.userKey,
          hiring: this.nowData.hiring,
          treatment: this.nowData.treatment,
          location: this.nowData.location,
          requirements: this.nowData.requirements,
          responsibility: this.nowData.responsibility
        })
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            // [...this.tableData] = res.data;
            this.getData();
            this.newData ={};
          }
        });
      this.editorFlag = false;
    },
    onSubmit() {
      api
        .addPartTimeInfo({
          apartKey: this.userKey,
          id: this.newData.id,
          hiring: this.newData.hiring,
          treatment: this.newData.treatment,
          location: this.newData.location,
          requirement: this.newData.requirement,
          responsibility: this.newData.responsibility
        })
        .then(res => {
          this.getData();
          this.newData = {};
        });
      this.cancel();
    },
    getData() {
      api
        .getPartTime({
          apartKey: this.userKey
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            [...this.tableData] = res.data;
          }
        });
    }
  },

  created: function() {
    this.userKey = this.$route.params.userKey;
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
