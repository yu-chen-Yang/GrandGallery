<template>
<div>
  <homeheader v-bind:is-login="isLogin" v-bind:username="username" v-bind:level="level" v-bind:user-title="userTitle" v-bind:userid="userid"/>
  <middle-icon />
  <preview/>
</div>
</template>

<script>
import homeheader from "../components/homepage/header";
import middleIcon from "../components/homepage/middleIcon";
import preview from "../components/homepage/preview";

export default {
  name: "homepage",
  components: {
    homeheader,middleIcon,preview
  },

  data () {
    return{
      userid:-1,
      isLogin:true,
      username:"yyc",
      userTitle:"",
      level:0
    }
  },
  watch:{
    app: function(){
      return{
        height:document.documentElement.clientHeight,
        width:document.documentElement.clientWidth,
      }
    }
  }
}

</script>

<style scoped>

</style>