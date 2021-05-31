<template>
    <div>
      <PicDetail/>
    </div>
</template>


<script>
import PicDetail from "../components/picDetail";
    export default {
        name: "testpage",
      components: {PicDetail},
      data () {
            return {
                right: false
            }
        },
      component:{
          PicDetail
      }
    }
</script>

<style scoped>

</style>
