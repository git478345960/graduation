<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="@/assets/logo2.jpg" alt="logo">
            </el-col>
            <el-col :span="18" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" class = "searchInp" @focus="focusInp" @blur="blurInp" ></el-input>
                    <el-button type="primary" icon="el-icon-search" class = "searchBtn">搜索</el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in searchHotList" :key = "item + '_' + index">{{item}}</dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <!-- <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link> -->
                            {{item}}
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <!-- <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link> -->
                    <router-link to="/">北京故宫博物院</router-link>
                    <router-link to="/"> 北京欢乐谷</router-link>
                    <router-link  to="/"> 尚隐·泉都市生活馆</router-link>
                    <router-link  to="/">故宫珍宝馆</router-link>
                    <router-link  to="/">北京连升商务酒店</router-link>
                    <router-link  to="/">  </router-link>
                </p>    
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default{
    data(){
        return {
            isFocus: false,
            searchList : ['英语家教','物理家教','写手','发传单','店员'],
            searchHotList:['数学家教','编程家教','音乐家教','英语口语家教'],
            searchWord:'',
            
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
       
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/css/header/searchBar.scss";
</style>
