<template>
<div class="header">
  <div class="nav">
    <div style="height:100%;float:left;">
      <div class="logo">
        <a href="javascript:void(0)" title="首页"></a>
      </div>
      <div class="nav-item">
        <ul>
          <li><a href="javascript:void(0)">课程</a></li>
          <li><a href="javascript:void(0)">职业路径</a></li>
          <li><a href="javascript:void(0)">实战</a></li>
          <li><a href="javascript:void(0)">猿问</a></li>
          <li><a href="javascript:void(0)">手记</a></li>
        </ul>
      </div>
    </div>
    <div style="height:100%;float:right;">
      <div class="search-warp">
        <div class="search-area">
          <input class="search-input" type="text" autocomplete="off">
          <input type="hidden" class="btn_search">
        </div>
        <div class="showhide-search icon" data-show="no">
          <i class="material-icons">search</i>
        </div>
      </div>
      <div class="login-area" id="user-msg">
        <ul>
          <li class="icon">
            <a href="javascript:void(0)">
              <i class="material-icons">local_grocery_store</i>
              购物车
            </a>
          </li>
          <li class="icon">
            <a href="javascript:void(0)">
              <i class="material-icons">notifications</i>
            </a>
          </li>
          <li class="user_box">
            <a href="javascript:void(0)">
              <img />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>


<script>

export default {
  methods:{

  },
  attached() {
    $(".icon").hover(
      function(){
        $(this).find('i').addClass('active');
      },
      function(){
        $(this).find('i').removeClass('active');
      }
    );
  },
  data() {
    return{
      
    }
  }
}

</script>


<style scoped>
.header {
  background:#000;
}
.nav {
  padding-right:20px;
  height:60px;
}
.logo{
  float:left;
}
.logo a{
  display: block;
  height: 60px;
  width: 140px;
  margin: 0 20px;
  background:url("../../../static/img/header/logo.png") center center no-repeat;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li a{
  height: 60px;
  line-height: 60px;
  display: block;
  text-decoration: none;
}
li a:hover{
  background-color:rgba(77,85,93,.4);
}
.nav-item, .login-area{
  float: left;
}
.nav-item ul, .login-area ul{
  display: flex;
}
.nav-item li a{
  color: #fff;
  padding: 0 25px;
}
.search-warp {
  float: left;
  position: relative;
  margin-right: 18px;
}
.search-area {
  float: right;
  position: relative;
  height: 38px;
  width: 210px;
  margin: 10px 0;
  padding-right: 30px;
  border: 1px solid #000;
  border-bottom-color: rgba(120,125,130,.8);
  zoom: 1;
  -webkit-transition: width .3s;
  -moz-transition: width .3s;
  transition: width .3s;
}
.search-area .search-input {
  padding: 5px 10px;
  width: 100%;
  height: 38px;
  line-height: 38px;
  font-size: 12px;
  float: left;
  border: 0;
  color: #fff;
  transition: background-color .3s;
  background-color: #000;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.search-area .btn_search {
  float: left;
  cursor: pointer;
  width: 30px;
  height: 38px;
  text-align: center;
  -webkit-transition: background-color .3s;
  -moz-transition: background-color .3s;
  transition: background-color .3s;
}
.search-warp .showhide-search {
  width: 30px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  display: inline-block;
  right: 0;
  top: 0;
}
.nav i {
  width: 30px;
  height: 60px;
  color: #757a7e;
  display: block;
  font-size: 22px;
  line-height: 60px;
  cursor: pointer;
  float:left;
}
.nav i.active {
  color: #fff;
}
.login-area li a{
  padding: 0 18px;
}
.login-area li a:hover{
  color:#fff;
}
.user_box img{
  width: 36px;
  height: 36px;
  border-color: #4d5559;
  margin-top: -5px;
  border-radius: 50%;
  display: inline-block;
  background: url("../../../static/img/header/menu_icon.png") no-repeat;
}
</style>
