<template>
  <div class="filter">
    <div style="width: 1080px;">
      <div class="condition" v-if="direction_tags.length>0">
        <strong>方向：</strong>
        <div class="items item1">
          <a class="active" @click.stop.prevent="conditionClick($event,1,true)">全部</a>
          <a v-for="direction in direction_tags" @click.stop.prevent="conditionClick($event,1,false)">{{ direction.name }}
          </a>
        </div>
        <div class="more">
          <a v-on:click.prevent="showMore">更多∨</a>
        </div>
      </div>
      <div class="condition" v-if="classify_tags.length>0">
        <strong>分类：</strong>
        <div class="items item2">
          <a class="active" @click.stop.prevent="conditionClick($event,2,true)">全部</a>
          <a v-for="classify in classify_tags" @click.stop.prevent="conditionClick($event,2,false)">{{ classify.name }}
          </a>
        </div>
        <div class="more">
          <a v-on:click.prevent="showMore" >更多∨</a>
        </div>
      </div>
      <div class="condition" v-if="type_tags.length>0">
        <strong>类型：</strong>
        <div class="items item3">
          <a class="active" @click.stop.prevent="conditionClick($event,3,true)">全部</a>
          <a v-for="type in type_tags" @click.stop.prevent="conditionClick($event,3,false)">{{ type.name }}
          </a>
        </div>
        <div class="more">
          <a v-on:click.prevent="showMore">更多∨</a>
        </div>
      </div>
      
    </div>
  </div> 
</template>


<script>
import Cookies from 'js-cookie'
import _ from 'lodash'
export default {
  methods:{
    showMore:function(e){//隐藏或显示“标签”的“更多”按钮
      var $item = $(e.target).parent(".more").prev();
      if(e.target.innerHTML==="更多∨"){
        $item.css({
          "max-height":"none",
          "overflow":"auto"
        });
        e.target.innerHTML = "收起∧";
      }else{
        $item.scrollTop(0);
        $item.css({
          "max-height":"70px",
          "overflow":"hidden"
        });
        e.target.innerHTML = "更多∨";
      }
    },
    conditionClick:function(e,type,isAll){
      if(this.flag){
        this.directionTags = this.direction_tags;
        this.classifyTags = this.classify_tags;;
        this.typeTags = this.type_tags;
        this.flag = false;
      }
      $(".condition .item"+type+" a").removeClass("active");
      var target = $(e.currentTarget);
      var str = target.text().trim();
      if(str.indexOf('(')!==-1){
        str = str.substr(0, str.indexOf('(')).trim();
      }
      target.addClass("active");
      if(type == 1){
        if(isAll){
          this.direction_tags = this.directionTags;
          this.classify_tags = this.classifyTags;
          this.type_tags = this.typeTags;
          this.selectedDirections="";
          $(".condition .item1 a").removeClass("active");
          $(".condition .item1 a:first").addClass("active");
        }else{
          this.selectedDirections=str;
        }
        $(".condition .item2 a").removeClass("active");
        $(".condition .item3 a").removeClass("active");
        $(".condition .item2 a:first").addClass("active");
        $(".condition .item3 a:first").addClass("active");
        this.selectedClassifys="";
        this.selectedTypes="";
      }else if(type == 2){
        if(isAll){

        }else{
          this.selectedClassifys=str;
          this.selectedTypes="";
          for(var i=0;i<this.classifyTags.length;i++){
            if(this.classifyTags[i].name === str){
              var tempDirection = [];
              var tempClassify = [];
              var tempDirectionText = this.classifyTags[i].direction;
              var tempType = [];
              for(var j=0;j<this.classifyTags.length;j++){
                if(this.classifyTags[j].direction === tempDirectionText){
                  tempClassify.push(this.classifyTags[j]);
                }
              }
              this.classify_tags = tempClassify;
              for(var k=0;k<this.classifyTags[i].type.length;k++){
                for(var l=0;l<this.typeTags.length;l++){
                  if(this.classifyTags[i].type[k] === this.typeTags[l].value){
                    tempType.push(this.typeTags[l]);
                    break;
                  }
                }
              }
              this.type_tags = tempType;
              for(var m=0;m<this.directionTags.length;m++){
                if(tempDirectionText === this.directionTags[m].value){
                  this.selectedDirections=this.directionTags[m].name;
                  break;
                }
              }
              var tempItems = $(".condition .item1 a");
              tempItems.removeClass("active");
              for(var n=0;n<tempItems.length;n++){
                if(tempItems[n].innerText === this.selectedDirections){
                  $(".condition .item1 a:eq("+n+")").addClass("active");
                  break;
                }
              }
              break;
            }
          }
        }
      }else if(type ===3){
        this.selectedTypes=str;
      }
      this.$dispatch("condition-select",{selectedDirections:this.selectedDirections,selectedClassifys:this.selectedClassifys,selectedTypes:this.selectedTypes});
    }
  },
  attached() {
    this.selectedDirections="";
    this.selectedClassifys="";
    this.selectedTypes="";
  },
  data() {
    return {
      directionTags:[],
      classifyTags:[],
      typeTags:[],
      flag:true,
      selectedDirections:"",
      selectedClassifys:"",
      selectedTypes:""
    }
  },
  props:['direction_tags','classify_tags','type_tags']

}

</script>


<style scoped>
.filter {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter span {
  width: 70px;
  display: inline-block;
  font: normal 14px/5px "SimSun";
}

.filter .condition {
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #eee;
}
.filter .condition:last-child{
    border: none;
}
.filter .condition a {
  cursor: pointer;
  text-decoration: none;
  margin: 3px 5px;
  font-size: 14px;
  color: #000;
  padding: 5px 10px;
  font-family: inherit;
}

.filter .condition a span {
  width: auto;
  font-family: inherit;
  font-size: 12px;
}

.filter .condition .active{
  color: #fff;
  display: inline-block;
  background-color: #f00;
}
.filter .condition .active span{
  color: #1272bb;
}
.condition{
  position: relative;
  border-bottom: 1px dashed #c3c1c1;
}

.condition strong{
  position: absolute;
  left: 0;
  top: 18px;
  width: 50px;
  height: 18px;
  color: #000;
  font-size: 13px;
  text-align: justify;
  font-weight: bold;
  text-justify: distribute-all-lines;
  text-align-last: justify;
  -moz-text-align-last: justify;
  -webkit-text-align-last: justify;
}

.condition .items{
  padding: 10px 0px 10px 63px;
  position: relative;
  zoom: 1;
  width: 860px;
  overflow: hidden;
  max-height: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.condition .more{
  position: absolute;
  right: 2px;
  bottom: 15px;
  width: 58px;
  overflow: hidden;
}

.filter .condition .more a{
  color: #2f2f2f;
  font-size: 12px;
  margin: 0;
}
</style>
