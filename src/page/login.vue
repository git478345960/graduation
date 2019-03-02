<template>
    <div class="loginWrap">
        <el-row class="top"></el-row>
        <el-row class="login">
            <el-row class="loginView">
                <el-col :span="8">
                    <router-link  class = "nameList" style="font-size:18px;" :to = "{name:'studentLogin',params:{name:'student'}}">学生</router-link>
                </el-col>
                <el-col :span="8">
                    <router-link class = "nameList" style="font-size:18px;" :to = "{name:'apartmentLogin',params:{name:'apartment'}}">公司</router-link>
                </el-col>
                <el-col :span="8">
                    <router-link class = "nameList" style="font-size:18px;" :to = "{name:'adminLogin',params:{name:'admin'}}">管理员</router-link>
                </el-col>
            </el-row>
            <el-row class="loginContent">
                <router-view class="loginBox"></router-view>
            </el-row>
            <el-row class="register">
                <el-button type="success" class="registerBtn"><a href="http://localhost:8081/register">去注册</a></el-button>
            </el-row>
        </el-row>
    </div>

</template>

<script>
import  adminLogin  from '@/components/login/adminLogin';
import  apartmentLogin from '@/components/login/apartmentLogin';
import  studentLogin  from '@/components/login/studentLogin';
export default {
    components:{
        adminLogin,
        apartmentLogin,
        studentLogin
    }
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
    }
    .loginWrap{
        position: relative;
        .top{
            height:360px;
            // border:1px solid black;
            background-color: #00b38a
        }
        .login{
            // height:384px;
            position: absolute;
            width:500px;
            height:300px;
            top:50%;
            left:50%;
            margin-left:-250px;
            // margin-top:-150px;
            // z-index:999;
            background-color:#fff;
            border:1px solid rgb(199, 187, 187);
            .loginView{
                height:30px;
                width:400px;
                text-align: center;
                margin: 0 auto;
                // border:1px solid black;
                z-index:999;
                .nameList{
                    color:#333;
                }
                
            }
            .loginContent{
                width:400px;
                margin: 0 auto;
            }
            .register{
                width:200px;
                float:right;
                margin-top:30px;
                .registerBtn{
                    float:right;
                    
                    
               
                }
            }
        }
    }
</style>