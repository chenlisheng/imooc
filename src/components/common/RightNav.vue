<template>
<div class="rightNav">
  <div class="contener">
    <ul>
      <li>
        <a href="javascript:void(0)">
          <i class="material-icons">info_outline</i>
          <span>意见反馈</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <i class="material-icons">help_outline</i>
          <span>常见问题</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" data-type="app">
          <i class="material-icons">phone_iphone</i>
          <span>APP下载</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" data-type="weixin">
          <i class="material-icons">textsms</i>
          <span>官方微信</span>
        </a>
      </li>
      <li style="border-bottom:none;">
        <a href="javascript:void(0)">
          <i class="material-icons">expand_less</i>
          <span>返回顶部</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="elevator">
    <img></img>
  </div>
</div>
</template>


<script>

export default {
  methods:{

  },
  attached() {
    $(".rightNav a").hover(function(){
      $(this).find('i').hide();
      $(this).find('span').show();
      if($(this)[0].attributes['data-type']){
        var type = $(this)[0].attributes['data-type'].value;
        $(".rightNav .elevator img").addClass(type);
      }
    },function(){
      $(this).find('i').show();
      $(this).find('span').hide();
      if($(this)[0].attributes['data-type']){
        var type = $(this)[0].attributes['data-type'].value;
        $(".rightNav .elevator img").removeClass(type);
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
.rightNav{
  width: 60px;
  top: 50%;
  right: 0;
  z-index:999;
  position: fixed;
  margin-top: -140px;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(7,17,27,.1);
}
.rightNav > .contener{
  width: 24px;
  margin: 0 auto;
}
.rightNav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.rightNav ul li {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.rightNav ul li a {
  display: block;
  width: 24px;
  height: 24px;
  text-decoration: none;
  font-size: 12px;
  line-height: 12px;
}
.rightNav ul li a:hover{
  color: red;
}
.rightNav ul li span{
  display:none;
}
.rightNav .elevator{
  line-height: 0;
}
.rightNav .elevator img{
  width:160px;
  background:url("../../../static/img/rightnav/elevator.png") no-repeat;
  margin-left: -160px;
  box-shadow: 4px 4px 12px 0 rgba(7,17,27,.1);
}
.rightNav .elevator img.weixin{
  height:200px;
  margin-top: -200px;
  background-position: -5px -5px;
}
.rightNav .elevator img.app{
  height:180px;
  margin-top: -180px;
  background-position: -5px -225px;
}
</style>
