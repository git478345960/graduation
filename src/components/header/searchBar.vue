<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="@/assets/logo2.jpg" alt="logo">
            </el-col>
            <el-col :span="18" class="center">
                <div class="wrapper" @keyup="getData">
                    <el-input v-model="searchWord" placeholder="请输入内容" class = "searchInp" @focus="focusInp" @blur="blurInp" autocomplete="off" ></el-input>
                    <el-button type="primary" icon="el-icon-search" class = "searchBtn" @click="toOthers">搜索</el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotpartJob" :key = "item + '_' + index">{{item}}</dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in backPartContents" :key="index">
                            <router-link :to="{name: 'searchDetail', params: {id: item.id}}">{{item.hiring}}</router-link>

                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" style="padding-right:5px;color:black;text-decoration:none;":to="{name: 'home', params: {name: item}}">{{item}}</router-link>
                    <!-- <router-link to="/">北京故宫博物院</router-link>
                    <router-link to="/"> 北京欢乐谷</router-link>
                    <router-link  to="/"> 尚隐·泉都市生活馆</router-link>
                    <router-link  to="/">故宫珍宝馆</router-link>
                    <router-link  to="/">北京连升商务酒店</router-link>
                    <router-link  to="/">  </router-link> -->
                </p>    
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default{
    data(){
        return {
            isFocus: false,
            searchList : ['英语家教','物理家教','写手','发传单','店员'],
            hotpartJob: ['数学家教','物理家教','少儿编程指导','HR实习'],
            searchWord:'',
            suggestList:['财务实习','市场策划','超市兼职','写手兼职'],
            backPartContents:[],
            backPartContent:{},
        }
    },
    computed:{
        isHotPlace(){
            return this.isFocus && !this.searchWord;
        },
        isSearchList(){
            return this.isFocus && this.searchWord;
        },

        
        
    },
    methods:{
        focusInp(){
            this.isFocus = true;
        },
        blurInp(){
            var self = this;
            setTimeout(function(){
            self.isFocus = false;
            },200)
        },
        getData(){
            api.getPartTimeInfos({hiring:this.searchWord})
            .then(res => {
                if(res.status === 200){
                    [...this.backPartContents] = res.data;
                }
            })
        },
        toOthers(){
            // console.log(11)
            this.$router.push({name:'searchContent',params:{hiring:this.searchWord}});
        }
       
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/css/header/searchBar.scss";
</style>
