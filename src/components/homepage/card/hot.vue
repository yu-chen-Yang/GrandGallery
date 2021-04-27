<template>
  <div>
    <div v-for="item in imgs" v-bind:key="item.id" class="li">
        <pic v-bind:width="item.width" v-bind:picscr="item.test" v-bind:ht="ht" v-bind:id="item.id" v-bind:sentence="item.sentence"/>
    </div>
    <br/>
    <q-img :src="test6" style="max-width: 30%;" class="cd" v-bind:height=ht />
    <q-img :src="test7" style="max-width: 40%;" class="cd" v-bind:height=ht />
    <q-img :src="test8" style="max-width: 30%;" class="cd" v-bind:height=ht />
  </div>
</template>

<script>
import pic from "../../pic";

export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
    pic
  },
  name: "hot",
  data:()=>({
    imgs:[{ test: require('@/assets/hot/1.jpeg'),id:1,width:"70%",sentence:"美丽的山群"},
      { test: require('@/assets/hot/2.png'),id:2,width:"30%",sentence: "plmm"},
      {test:require('@/assets/hot/3.png'),id:3,width: "40%",sentence:"去郊游"},
      {test:require('@/assets/hot/4.png'),id:4,width: "20%",sentence:"古镇"},
      {test:require('@/assets/hot/5.png'),id:5,width:"40%",sentence:"航拍中国"},
      {test: require('@/assets/hot/6.png'),id:6,width: "30%",sentence: "yyc女装照"},
      {test: require('@/assets/hot/7.png'),id:7,width: "40%",sentence:"新娘"},
      {test: require('@/assets/hot/8.png'),id:8,width: "30%",sentence:"mechanical"}],
    width: document.documentElement.clientWidth,
    ht: document.documentElement.clientHeight*0.55+'px'
  }),
  mounted:{
    ishide:function(){
      return false;
    }
  }
}
</script>
<style scoped>
.cd{
  border-color: white;
  border-style: solid;
  border-width: 0.3rem;
  white-space:nowrap;
}
.li{
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  position: relative;
  cursor: pointer;
  list-style: none;
  white-space:nowrap;
  line-height: 1.25;
  letter-spacing: normal;
}
</style>