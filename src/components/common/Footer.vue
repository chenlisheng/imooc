<template>
<div class="footer">
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
        <img title="微信"/>
      </li>
      <li>
        <img title="新浪微博"/>
      </li>
      <li>
        <img title="QQ空间"/>
      </li>
    </ul>
  </div>
</div>
</template>


<script>

export default {
  methods:{

  },
  attached() {
    
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
  padding: 27px 0;
  min-width: 620px;
  display:flex;
}
.footer ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size:12px;
  display:flex;
}
.footer li{
  margin-right: 30px;
  text-align: center;
}
.footer li a{
  line-height: 1.8;
  display: block;
  text-decoration: none;
  color:#fff;
}
.footer li img{
  width: 32px;
  height: 32px;
  background:url("../../../static/img/footer/footer-sprite.png") no-repeat;
  
}
</style>
