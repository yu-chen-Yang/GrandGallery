<template>
  <div class="app">
    <homeheader/>
    <middle-icon />
    <preview/>
  </div>
</template>

<script>
import homeheader from "./components/homepage/header";
import middleIcon from "./components/homepage/middleIcon";
import preview from "./components/homepage/preview";
export default {
  name: 'LayoutDefault',
  components: {
    homeheader,middleIcon,preview
  },

  data () {
    return {
      leftDrawerOpen: false
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

<style>
</style>
