<template>
<div>
  <homeheader v-bind:is-login="isLogin" v-bind:username="username" v-bind:level="level" v-bind:user-title="userTitle" v-bind:userid="userid"/>
</div>
</template>

<script>
import homeheader from "../components/homepage/header";

export default {
  name: "homepage",
  components: {
    homeheader,
  },

  data () {
    return{
      userid:-1,
      isLogin:false,
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
