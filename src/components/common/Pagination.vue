<template>
  <div id="pagination">
    <table>
      <tbody>
        <tr>
          <td disabled v-on:click="firstPage" v-bind:class="pageConfig.current_page > 1?'':'disabled'" style="width:30px;background-color:inherit;margin:0;">
            <a>首页</a>
          </td>
          <td id="page-pre" disabled v-on:click="prePage" v-bind:class="pageConfig.current_page > 1?'':'disabled'" style="width:50px;background-color:inherit;">
            <a>上一页</a>
          </td>
          <td v-for="page in show_page_num"  v-bind:class="{ 'page-active': pageConfig.current_page == page + pageConfig.first_page}" v-on:click="setPage(page)"><a>{{ pageConfig.first_page + page }}</a></td>
          <td id="page-next" v-on:click="nextPage" v-bind:class="(total_items/pageConfig.page_item_num > 1)&&(pageConfig.current_page < parseInt(total_items/pageConfig.page_item_num)+1)?'':'disabled'" style="width:50px;background-color:inherit;">
            <a>下一页</a>
          </td>
          <td v-on:click="lastPage" v-bind:class="(total_items/pageConfig.page_item_num > 1)&&(pageConfig.current_page < parseInt(total_items/pageConfig.page_item_num)+1)?'':'disabled'" style="width:30px;background-color:inherit;margin:0;">
            <a>尾页</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:['pageConfig','total_items'],
  methods: {
    firstPage: function(event){//首页点击事件
      this.pageConfig.first_page = 1;
      this.setPage(0);
    },
    lastPage: function(event){//尾页点击事件
      var allPages = Math.ceil(this.total_items / this.pageConfig.page_item_num);
      this.pageConfig.first_page = allPages-this.show_page_num+1;
      this.setPage(allPages-1);
    },
    nextPage: function (event) {//下一页点击事件
      var allPages = Math.ceil(this.total_items / this.pageConfig.page_item_num);
      if(this.pageConfig.current_page === allPages){
        return;
      }
      this.pageConfig.current_page += 1;
      var activeCards = this.$parent.$el.querySelector('.active');
      var icons=this.$parent.$el.querySelector('.isOpen');
      if(activeCards){
        activeCards.className = activeCards.className.replace(' active','');
      }//去掉active card
      if(icons){
        icons.className = icons.className.replace(' isOpen','');
        icons.innerText = 'lock_outline';
      }
      var mid = Math.ceil(this.show_page_num / 2);
      if((this.pageConfig.current_page>mid)&&(this.pageConfig.current_page<=(allPages-mid+1))){
        this.pageConfig.first_page +=1;
      }
    },

    prePage: function (event) {//上一页点击事件
      if(this.pageConfig.current_page === 1){
        return;
      }
      this.pageConfig.current_page -= 1;
      var activeCards = this.$parent.$el.querySelector('.active');
      var icons=this.$parent.$el.querySelector('.isOpen');
      if(activeCards){
        activeCards.className = activeCards.className.replace(' active','');
      }//去掉active card
      if(icons){
        icons.className = icons.className.replace(' isOpen','');
        icons.innerText = 'lock_outline';
      }
      var mid = Math.ceil(this.show_page_num / 2);
      var t = this.pageConfig.current_page-this.pageConfig.first_page;
      if((t<mid-1)&&this.pageConfig.first_page>1){
        this.pageConfig.first_page -=1;
      }
    },

    setPage: function (page) {//页码点击事件
      var allPages = Math.ceil(this.total_items / this.pageConfig.page_item_num);
      var activeCards = this.$parent.$el.querySelector('.active');
      var icons=this.$parent.$el.querySelector('.isOpen');
      if(activeCards){
        activeCards.className = activeCards.className.replace(' active','');
      }//去掉active card
      if(icons){
        icons.className = icons.className.replace(' isOpen','');
        icons.innerText = 'lock_outline';
      }
      this.pageConfig.current_page = page+this.pageConfig.first_page;
      var mid = Math.ceil(this.show_page_num / 2);
      if((page>mid-1)&&(this.pageConfig.first_page+this.show_page_num<=allPages)){
        this.pageConfig.first_page += (page-mid+1);
      }
      if((page<mid-1)&&(this.pageConfig.first_page>1)){
        this.pageConfig.first_page += (page-mid+1);
      }
    }
  },
  computed: {
    show_page_num: function (){
      var cop_page_num = Math.ceil(this.total_items / this.pageConfig.page_item_num);
      if(this.pageConfig.current_page > cop_page_num&&cop_page_num>0){
        this.pageConfig.current_page = cop_page_num;
      }
      var num = 7;
      return cop_page_num > num ? num : cop_page_num;
    }
  },
  data() {
    return {
    }
  }
  
}
</script>

<style scoped>
#pagination {
  text-align: center;
  display: block;
  -webkit-user-select: none;  /* Chrome all / Safari all /opera15+*/  
  -moz-user-select: none;     /* Firefox all */  
  -ms-user-select: none;      /* IE 10+ */  
  user-select: none;
  background-color: #edeff0;
  margin: 0 auto;
  padding: 20px 0;
}

#pagination table {
  border-collapse:collapse;
  text-align:left;
  margin:0 auto;
}

#pagination td.disabled a{
  color: #9c9696;
}

#pagination tr {
  padding: 10px;
  display: inline-block;
}

#pagination td {
  display: inline-block;
  margin: 0 5px;
  list-style-type: disc;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  width:30px;
  height:30px;
  border-radius: 50%;
}

#pagination td:not(.page-active):hover {
  background-color: #d9dde1;
}
#pagination td:hover a{
  color: #4d555d;
}
#pagination td.page-active a{
  color: #ffffff;
}
#pagination td.page-active{
  background-color: #4d555d;
  border: none;
}
#pagination td a {
  display:block;
  height:30px;
  line-height:30px;
  color: #000000;
}

#page-next {
  margin-left: 10px;
}
</style>
