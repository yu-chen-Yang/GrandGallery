<template>
  <div class="card">
    <el-row>
      <el-col :span="8"><div style="opacity: 0" >1</div></el-col>
      <el-col :span="2"><div v-on:click="activate1" v-bind:style="color1" style="cursor: pointer" @mouseenter="mouse1in" @mouseleave="mouse1out">热门</div><div v-bind:style="opacity1" style="color: #0099E5;font-weight: 900">____</div></el-col>
      <el-col :span="2"><div v-on:click="activate2" v-bind:style="color2" style="cursor: pointer" @mouseenter="mouse2in" @mouseleave="mouse2out">推荐</div><div v-bind:style="opacity2" style="color: #0099E5;font-weight: 900">____</div></el-col>
      <el-col :span="2"><div v-on:click="activate3" v-bind:style="color3" style="cursor: pointer" @mouseenter="mouse3in" @mouseleave="mouse3out">组图</div><div v-bind:style="opacity3" style="color: #0099E5;font-weight: 900">____</div></el-col>
      <el-col :span="2"><div v-on:click="activate4" v-bind:style="color4" style="cursor: pointer" @mouseenter="mouse4in" @mouseleave="mouse4out">图文</div><div v-bind:style="opacity4" style="color: #0099E5;font-weight: 900">____</div></el-col>
    </el-row>
    <div class="cardArea">
      <hot/>
    </div>
  </div>
</template>

<script>
import hot from "./card/hot.vue"
export default {
  name: "preview",
  components:{hot},
  data:()=>({
    color1:{
      color:'#0099E5',
      clicked: true
    },
    color2:{
      color:"black",
      clicked: true
    },
    color3:{
      color: "black",
      clicked: true
    },
    color4:{
      color:"black",
      clicked: true
    },
    opacity1:{
      opacity:1
    },
    opacity2: {
      opacity: 0
    },
    opacity3:{
      opacity:0
    },
    opacity4:{
      opacity:0
    }
  }),
  methods:{
    activate1:function (){
      this.color1.color="#0099E5";
      this.opacity1.opacity=1;
      this.color2.color="black";
      this.color3.color="black";
      this.color4.color="black";
      this.opacity2.opacity=0;
      this.opacity3.opacity=0;
      this.opacity4.opacity=0;
      this.color1.clicked=true;
      this.color2.clicked=false;
      this.color3.clicked=false;
      this.color4.clicked=false;
    },
    activate2:function (){
      this.color2.color="#0099E5";
      this.opacity2.opacity=1;
      this.color1.color="black";
      this.color3.color="black";
      this.color4.color="black";
      this.opacity1.opacity=0;
      this.opacity3.opacity=0;
      this.opacity4.opacity=0;
      this.color1.clicked=false;
      this.color2.clicked=true;
      this.color3.clicked=false;
      this.color4.clicked=false;
    },
    activate3:function(){
      this.color3.color="#0099E5";
      this.opacity3.opacity=1;
      this.color2.color="black";
      this.color1.color="black";
      this.color4.color="black";
      this.opacity2.opacity=0;
      this.opacity1.opacity=0;
      this.opacity4.opacity=0;
      this.color1.clicked=false;
      this.color2.clicked=false;
      this.color3.clicked=true;
      this.color4.clicked=false;
    },
    activate4:function(){
      this.color4.color="#0099E5";
      this.opacity4.opacity=1;
      this.color2.color="black";
      this.color3.color="black";
      this.color1.color="black";
      this.opacity2.opacity=0;
      this.opacity3.opacity=0;
      this.opacity1.opacity=0;
      this.color1.clicked=false;
      this.color2.clicked=false;
      this.color3.clicked=false;
      this.color4.clicked=true;
    },
    mouse1in:function (){
      this.color1.color="#0099E5";
    },
    mouse1out: function(){
      if(!this.color1.clicked){
        this.color1.color="black";
      }
},
    mouse2in:function (){
      this.color2.color="#0099E5";
    },
    mouse2out:function (){
      if(!this.color2.clicked) {
        this.color2.color = "black";
      }
    },
    mouse3in:function (){
      this.color3.color="#0099E5";
    },
    mouse3out:function (){
      if(!this.color3.clicked) {
        this.color3.color = "black";
      }
    },
    mouse4in:function (){
      this.color4.color="#0099E5";
    },
    mouse4out:function (){
      if(!this.color4.clicked) {
        this.color4.color = "black";
      }
    }
  }
}


</script>

<style scoped>
.card{
  margin-top: 10%;
}
.cardArea{
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
}
</style>