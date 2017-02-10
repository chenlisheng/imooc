<template>
<div class="footer">
  <div class="content">
    <div class="left">
      <div>
        <ul>
          <li>
            <a href="javascript:void(0)">网站首页</a>
          </li>
          <li>
            <a href="javascript:void(0)">企业合作</a>
          </li>
          <li>
            <a href="javascript:void(0)">人才招聘</a>
          </li>
          <li>
            <a href="javascript:void(0)">联系我们</a>
          </li>
          <li>
            <a href="javascript:void(0)">讲师招募</a>
          </li>
          <li>
            <a href="javascript:void(0)">常见问题</a>
          </li>
          <li>
            <a href="javascript:void(0)">意见反馈</a>
          </li>
          <li>
            <a href="javascript:void(0)">慕课大学</a>
          </li>
          <li>
            <a href="javascript:void(0)">友情链接</a>
          </li>
        </ul>
      </div>
      <div class="copyRight">
        <span>Copyright © 2017 imooc.com All Rights Reserved | 京ICP备 13046642号-2</span>
      </div>
    </div>
    <div class="right">
      <ul>
        <li>
          <a href="javascript:void(0)" title="微信" data-type="weixin">
            <i>
              <img style="background-position:0 -279px;"/>
            </i>
          </a>
          <div class="weixin_box">
            <img/>
          </div>
        </li>
        <li>
          <a href="http://weibo.com/u/3306361973" target="_blank" title="新浪微博">
            <i>
              <img style="background-position:0 -321px;"/>
            </i>
          </a>
        </li>
        <li>
          <a href="http://user.qzone.qq.com/1059809142/" target="_blank" title="QQ空间">
            <i>
              <img style="background-position:0 -363px;"/>
            </i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>


<script>

export default {
  methods:{

  },
  attached() {
    $(".footer .right a").hover(function(){
      if($(this)[0].attributes['data-type']){
        $(".weixin_box").show();
      }
    },function(){
      if($(this)[0].attributes['data-type']){
        $(".weixin_box").hide();
      }
    });
  },
  data() {
    return{
      
    }
  }
}

</script>


<style scoped>
.footer{
  background: #000;
  border-top: 1px solid #e2e4e6;
  font-size: 12px;
  color: #787d82;
}
.content{
  margin:0 auto;
  padding: 30px 110px 65px 110px;
  min-width: 620px;
}
.left{
  float: left;
}
.right{
  float: right;
}
.footer ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size:12px;
  display:flex;
}
.footer li{
  margin-right: 15px;
  text-align: center;
}
.footer li a{
  line-height: 1.8;
  display: block;
  text-decoration: none;
  color:#c8cdd2;
}
.footer li a:hover{
  color:#fff;
}
.footer li a img{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background:url("../../../static/img/footer/footer-sprite.png") no-repeat;
  filter: "alpha(opacity=40)";
  opacity: 0.4;
}
.footer li a img:hover{
  filter: "alpha(opacity=100)";
  opacity: 1;
}
.footer .weixin_box {
  position: absolute;
  display: none;
}
.footer .weixin_box img{
  width:160px;
  height:200px;
  background:url("../../../static/img/footer/footer-sprite.png") no-repeat;
  background-position: -5px -15px;
  margin-left: -65px;
  margin-top: -300px;
}
</style>
