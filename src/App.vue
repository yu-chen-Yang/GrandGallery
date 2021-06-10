<template>
  <div class="app">
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
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
