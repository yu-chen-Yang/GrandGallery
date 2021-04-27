<template>
  <div>
    <q-img
      :src="test1"
      style="max-width: 70%;" v-bind:height=ht class="cd"/>
    <q-img :src="test2" style="max-width: 30%;" v-bind:height=ht class="cd"/>
    <br/>
    <q-img :src="test3" style="max-width: 40%;" class="cd" v-bind:height=ht />
    <q-img :src="test4" style="max-width: 20%;" class="cd" v-bind:height=ht />
    <q-img :src="test5" style="max-width: 40%;" class="cd" v-bind:height=ht />
    <br/>
    <q-img :src="test6" style="max-width: 30%;" class="cd" v-bind:height=ht />
    <q-img :src="test7" style="max-width: 40%;" class="cd" v-bind:height=ht />
    <q-img :src="test8" style="max-width: 30%;" class="cd" v-bind:height=ht />
  </div>
</template>

<script>
export default {
  name: "hot",
  data:()=>({
    test1: require('@/assets/hot/1.jpeg'),
    test2: require('@/assets/hot/2.png'),
    test3: require('@/assets/hot/3.png'),
    test4: require('@/assets/hot/4.png'),
    test5: require('@/assets/hot/5.png'),
    test6: require('@/assets/hot/6.png'),
    test7: require('@/assets/hot/7.png'),
    test8: require('@/assets/hot/8.png'),

    width: document.documentElement.clientWidth,
    ht: document.documentElement.clientHeight*0.55+'px'
  }),
}
</script>
<style scoped>
.cd{
  border-color: white;
  border-style: solid;
  border-width: 0.3rem;
}
</style>