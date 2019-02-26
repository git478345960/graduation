<template>
  <div class="experienceWrap">
    <div class="logo">
      <h2>听取经验</h2>
      <h3>让自己少走弯路</h3>
    </div>
    <div class="experienceContent">
      <ul>
        <li><a href="#"><h1>title</h1><p>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p></a></li>
        <li><a href="#"><h1>title</h1><p>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p></a></li>
        <li><a href="#"><h1>title</h1><p>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p></a></li>
        <li><a href="#"><h1>title</h1><p>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p></a></li>
        <li><a href="#"><h1>title</h1><p>contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang = "scss" scoped>
.experienceWrap {
  width: 1300px;
  height: 650px;
  margin: 0 auto;
  .logo {
        min-width: 1024px;
    height: 125px;
    padding-top: 35px;
    background: #100f06 url(//www.lgstatic.com/www/static/community/modules/index/banner/img/banner-bg_21a3371.jpg) center center no-repeat;

    h2 {
      margin:0 auto;
      margin-bottom: 6px;
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
      color: #fff;
      text-align: center;
    }
    h3 {
      margin-bottom: 4px;
      font-size: 26px;
      line-height: 36px;
      color: #fff;
      text-align: center;
    }
  }
  .experienceContent{
    height:490px;
    ul{
      li{
        float:left;
        width:627px;
        height:80px;
        padding:10px;
        margin-bottom:2px;
        margin-right:2px;
        /* border-bottom:1px dashed grey; */
        border-right:1px dashed grey;
        a{
          text-decoration: none;
          
          h1{
            padding:5px;
            color:#333;
            &:hover{
              color: #00b38a;
            }
          }
          p{
            color:#555;
            padding:10px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          
        }
        
      }
    }
  }
}
</style>
