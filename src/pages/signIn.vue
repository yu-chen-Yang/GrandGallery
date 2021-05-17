<template>
<div class="back">

</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: "signIn",
  data:()=>({
    id:"",
    pwd:""
  }),
}

</script>

<style scoped>
.back{
  background-color: #0099E5;
}
</style>