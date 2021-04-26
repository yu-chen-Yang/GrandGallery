<template>
  <div>
    <q-img
      :src="test"
      style="max-width: 31em; height: 20em;" class="cd"/>
    <q-img :src="test2" style="max-width: 31em; height: 20em;" class="cd"/>
  </div>
</template>

<script>
export default {
  name: "hot",
  data:()=>({
    test: require('@/assets/home/1.png'),
    test2: require('@/assets/home/2.png')
  })
}
</script>
<style scoped>
.cd{
  border-color: white;
  border-style: solid;
  border-width: 0.3rem;
}
</style>