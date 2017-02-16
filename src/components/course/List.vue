<template>
  <div>
    <common-header id="header"></common-header>
    <div id="main">
      <div>
        <imooc-conditions :direction_tags="direction" :classify_tags="classify" :type_tags="type" @condition-select = "conditionSelect"></imooc-conditions>
      </div>
      <div style="width:100px;height:1000px;background:red;"></div>
      <div>
        <imooc-pagination v-show="displayCourses.length>0?true:false" :total_items="total_items" :value="pageConfig" :page-config.sync="pageConfig"></foxgis-imooc>
      </div>
    </div>
    <common-rightnav id="rightNav"></common-rightnav>
    <common-footer id="footer"></common-footer>
  </div>
</template>


<script>
export default {
  methods:{
    conditionSelect: function(data){//根据条件筛选
      this.selected_direction_tag = data.selectedDirections;
      this.selected_classify_tag = data.selectedClassifys;
      this.selected_type_tag = data.selectedTypes;
    }
  },
  attached() {
    this.$http({url:'/static/config/course.json',method:'GET'})
    .then(function(response){
      this.classify = response.data.course;
      this.direction = response.data.direction;
      this.type = response.data.type;
    });
  },
  computed: {
    total_items: function (){
      var count = this.displayCourses.length;
      return count;
    },

    displayCourses: function(){
      var tempCourses = this.classify;
      /*if(this.searchFonts.length>0){
        tempCourses = this.searchFonts;
      }

      if( this.searchKeyWords.trim().length===0){
        return tempCourses.slice(0);
      }
      if(this.searchFonts.length === 0 && this.searchKeyWords.trim().length!==0){
      //用户进行了搜索，但结果为空
        return this.searchFonts;
      }*/

      return tempCourses;
    },
  },
  data() {
    return{
      direction:[],
      classify:[],
      type:[],
      selected_direction_tag:{},
      selected_classify_tag:{},
      selected_type_tag:{},
      pageConfig: {
        page_item_num: 2,         //每页显示的条数
        current_page: 1,          //点击的页面
        first_page: 1,            //可见页面的起始页
      }
    }
  }
}
</script>


<style scoped>

</style>
