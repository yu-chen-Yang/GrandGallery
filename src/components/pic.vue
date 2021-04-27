<template>
  <q-img :src=picscr v-bind:width="width" v-bind:height="ht"  class="cd" native-context-menu @mouseenter="mousein" @mouseleave="mouseout">
    <div class="absolute-bottom" v-bind:hidden="isHide" style="opacity: 0.8; font-size: 1rem;color: white;
    font-family: Arial;font-weight: 500; text-align: left; height:3rem" >
      {{sentence}}
    </div>
  </q-img>
</template>

<script>
export default {
  name: "pic",
  props:{
    picscr: String,
    id: Number,
    sentence: String,
    width:String,
    ht:String
  },
  data:()=>({
    isHide: true
}),
  methods:{
    mousein:function (){
      this.isHide=false;
    },
    mouseout:function (){
      this.isHide=true;
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
</style>