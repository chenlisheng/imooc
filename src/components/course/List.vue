<template>
  <common-header id="header"></common-header>
  <div id="main">
    <div>

    </div>
    <imooc-conditions :direction_tags="direction_tags" :classify_tags="classify_tags" :type_tags="type" @condition-select = "conditionSelect"></imooc-conditions>
    <div style="width:100px;height:1000px;background:red;"></div>
    <div ></div>
  </div>
  <common-rightnav id="rightNav"></common-rightnav>
  <common-footer id="footer"></common-footer>
</template>


<script>
export default {
  methods:{
    conditionSelect: function(data){//根据条件筛选
      this.selected_direction_tag = data.selectedDirections;
      this.selected_classify_tag = data.selectedClassifys;
      this.selected_type_tag = data.selectedTypes;
      this.getNewConditions();
    },
    getNewConditions:function(){

    }
  },
  attached() {
    this.$http({url:'/static/config/course.json',method:'GET'})
    .then(function(response){
      this.classify = response.data.course;
      this.direction = response.data.direction;
      this.type = response.data.type;
      this.direction_tags = this.direction;
      this.classify_tags = this.classify;
      this.type_tags = this.type;
    });
  },
  computed: {
    displayCourse:function(){
      var tempCourse = this.classify;
      for(var i=0;i>tempCourse.length;i++){
        
      }
    }
  },
  data() {
    return{
      direction:[],
      classify:[],
      type:[],
      direction_tags:[],
      classify_tags:[],
      type_tags:[],
      selected_direction_tag:"",
      selected_classify_tag:"",
      selected_type_tag:""
    }
  }
}
</script>


<style scoped>

</style>
