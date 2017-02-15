<template>
<div class="header">
  <div class="nav">
    <div style="height:100%;float:left;">
      <div class="logo">
        <a href="javascript:void(0)" title="首页"></a>
      </div>
      <div class="nav-item">
        <ul>
          <li><a href="javascript:void(0)" class="item">课程</a></li>
          <li>
            <a href="javascript:void(0)" class="item">职业路径
              <i class="icn-new"></i>
            </a>
          </li>
          <li><a href="javascript:void(0)" class="item">实战</a></li>
          <li><a href="javascript:void(0)" class="item">猿问</a></li>
          <li><a href="javascript:void(0)" class="item">手记</a></li>
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
          <i class="material-icons item">search</i>
        </div>
      </div>
      <div class="login-area" id="user-msg">
        <ul>
          <li class="icon" data-nav="shop_car">
            <a href="javascript:void(0)" class="item">
              <i class="material-icons item">local_grocery_store</i>
              购物车
            </a>
            <div class="shop_car_box showBox">
              <div class="shop_car_content">
                <div class="top">
                  <span class="left">我的购物车</span>
                  <span class="right">已加入0门课程</span>
                </div>
                <div class="middle">
                  <div class="content">
                    <div style="height: 120px;">
                      <i class="material-icons">local_grocery_store</i>
                      <span>购物车里空空如也</span>
                    </div>
                    <div style="height: 120px;border-top: 1px solid #eee;">
                      <span class="course">快去这里选购你中意的课程</span>
                      <a href="javascript:void(0)">实战课程</a>
                      <a href="javascript:void(0)">职业路径</a>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <a href="javascript:void(0)">我的订单中心</a>
                  <mdl-button v-mdl-ripple-effect accent raised>去购物车</mdl-button>
                </div>
              </div>
            </div>
          </li>
          <li class="icon">
            <a href="javascript:void(0)" class="item" v-if="username==undefined">
              <span>登陆</span>
            </a>
            <a href="javascript:void(0)" class="item" v-else>
              <i class="material-icons item">notifications</i>
            </a>
          </li>
          <li class="user_box icon" data-nav="user_center">
            <a href="javascript:void(0)" class="item" v-if="username==undefined">
              <span>注册</span>
            </a>
            <a href="javascript:void(0)" class="item" data-type="user_msg" v-else>
              <img />
            </a>
            <div class="user_msg_box showBox" v-if="username!=undefined">
              <div class="user_msg_content">
                <div style="height:240px;border-bottom:1px solid #eee">
                  <div class="top">
                    <img/>
                    <div class="text">
                      <span>慕粉4346736</span>
                      <div>
                        <a href="javascript:void(0)">经验<span>5000</span></a>
                        <a href="javascript:void(0)">积分<span>50</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="middle">
                    <ul>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="material-icons">book</i>
                          我的课程
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="material-icons">receipt</i>
                          订单中心
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="material-icons">store</i>
                          积分商城
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="material-icons">settings</i>
                          个人设置
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="bottom">
                    <div>
                      <i class="material-icons">schedule</i>
                      <span style="font-weight: bold;">JS动画效果</span>
                    </div>
                    <div style="margin-left: 20px;">
                      <span style="color: #787d82;">jQuery动画案例</span>
                      <a href="javascript:void(0)">继续</a>
                    </div>
                  </div>
                </div>
                <div class="user_exit">
                  <a href="javascript:void(0)">安全退出</a>
                </div>
              </div>
            </div>
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
    bindMouseEvents:function(){
      $(".icon").hover(
        function(){
          $(this).find('i.item').addClass('active');
          $(this).find('a.item').css({color:"#fff",backgroundColor:'rgba(77,85,93,.4)'});
          if($(this)[0].attributes['data-nav']){
            $(this).find('div.showBox').show();
          }
        },
        function(){
          $(this).find('i.item').removeClass('active');
          $(this).find('a.item').css({color:"#ff4081",backgroundColor:'#000'});
          if($(this)[0].attributes['data-nav']){
            $(this).find('div.showBox').hide();
          }
        }
      );
    }
  },
  attached() {
    this.bindMouseEvents();
  },
  data() {
    return{
      username: 'chenlisheng'
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
a{
  text-decoration: none;
}
li a.item{
  height: 60px;
  line-height: 60px;
  display: block;
}
li a.item:hover{
  background-color:rgba(77,85,93,.4);
}
.nav-item, .login-area{
  float: left;
}
.nav-item ul, .login-area ul{
  display: flex;
}
.nav-item li a.item{
  color: #fff;
  padding: 0 25px;
}
.nav-item li a.item .icn-new{
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  top: -10px;
  left: -5px;
  background:url("../../../static/img/header/new.png") no-repeat;
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
.nav i.item {
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
.login-area li a.item{
  padding: 0 18px;
}
.login-area li a.item:hover{
  color:#fff;
}
.user_box img{
  width: 36px;
  height: 36px;
  border-color: #4d5559;
  margin-top: -5px;
  border-radius: 50%;
  display: inline-block;
  background: url("../../../static/img/header/user.jpg") no-repeat;
  background-size: cover;
}
/*购物车弹框样式*/
.header .nav .showBox {
  display:none;
}
.header .nav .shop_car_box{
  width: 350px;
  height: 410px;
  position: absolute;
  background-color: #fff;
  margin-left: -242px;
  z-index: 9999;
}
.header .nav .shop_car_content{
  width: 330px;
  height: 390px;
  margin: 10px;
}
.header .nav .shop_car_content .top,
.header .nav .shop_car_content .bottom{
  height: 50px;
  width: 100%;
}
.header .nav .shop_car_content .top span{
  display: block;
  font-size: 12px;
  line-height: 50px;
  padding: 0 10px;
}
.header .nav .shop_car_content .top span.left{
  font-size: 16px;
  float: left;
}
.header .nav .shop_car_content .top span.right{
  color: #999;
  float: right;
}
.header .nav .shop_car_content .middle {
  height: 288px;
  width: 100%;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.header .nav .shop_car_content .middle .content {
  width: 180px;
  height: 240px;
  margin: 0 auto;
  padding: 24px 0;
  text-align: center;
}
.header .nav .shop_car_content .middle .content i {
  margin-bottom: 12px;
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: #93999f;
  font-size: 36px;
  color: #fff;
  border-radius: 50%;
}
.header .nav .shop_car_content .middle .content span {
  display: block;
}
.header .nav .shop_car_content .middle .content span.course {
  padding-top: 20px;
  font-size: 12px;
  color: #999;
}
.header .nav .shop_car_content .middle .content a {
  display: block;
  color: #f00;
  font-size: 12px;
  text-decoration: none;
}
.header .nav .shop_car_content .bottom .mdl-button {
  float: right;
  margin-right: 10px;
  padding: 0 5px;
  font-size: 12px;
  margin-top: 10px;
}
.header .nav .shop_car_content .bottom a{
  color: #999;
  float: left;
  display: block;
  font-size: 12px;
  line-height: 50px;
  padding: 0 10px;
  text-decoration: none;
}
.header .nav .shop_car_content .bottom a:hover{
  color: #f00;
}
/*用户信息弹框样式*/
.header .nav .user_msg_box {
  width: 310px;
  height: 310px;
  position: absolute;
  background-color: #fff;
  margin-left: -238px;
  z-index: 9999;
}
.header .nav .user_msg_content {
  width:280px;
  height:280px;
  margin:15px;
}
.header .nav .user_msg_content a {
  font-size: 12px;
  color: #787d82;
}
.header .nav .user_msg_content .top{
  display: flex;
  height: 90px;
}
.header .nav .user_msg_content .top img{
  width: 70px;
  height: 70px;
  margin-top: 10px;
}
.header .nav .user_msg_content .top .text{
  margin-left: 20px;
  margin-top: 18px;
}
.header .nav .user_msg_content .top .text>span{
  font-size: 16px;
  display: block;
  line-height: 30px;
}
.header .nav .user_msg_content .middle {
  height: 90px;
  width: 100%;
}
.header .nav .user_msg_content .middle ul{
  width: 280px;
  display: block;
  height: 90px;
}
.header .nav .user_msg_content .middle li{
  width: 130px;
  height: 35px;
  line-height: 35px;
  margin: 5px 10px 5px 0;
  background-color: #f3f5f7;
  float: left;
}
.header .nav .user_msg_content .middle li:hover a{
  color: #4d555d;
  background-color: #d9dde1;
}
.header .nav .user_msg_content .middle li>a{
  width: 120px;
  height: 35px;
  display: block;
}
.header .nav .user_msg_content .middle li i{
  font-size: 16px;
  vertical-align: text-top;
  margin-left: 15px;
}
.header .nav .user_msg_content .bottom{
  height: 60px;
  width: 100%;
  font-size: 12px;
}
.header .nav .user_msg_content .bottom i{
  font-size: 16px;
  vertical-align: text-top;
}
.header .nav .user_msg_content .bottom a{
  display: block;
  float: right;
  color: #00b43c;
}
.header .nav .user_msg_content .bottom a:hover{
  color: #00c850;
}
.header .nav .user_msg_content .user_exit{
  height: 40px;
  line-height: 40px;
  text-align: right;
}
.header .nav .user_msg_content .user_exit a{
  color: #4d555d;
}
.header .nav .user_msg_content .user_exit a:hover{
  color: #f00;
}
</style>
