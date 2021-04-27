<template>
  <div>
    <div v-for="item in imgs" v-bind:key="item.id" class="li">
        <q-img :src="item.test" v-bind:width="item.width" v-bind:height="ht" class="cd"/>
    </div>
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
    imgs:[{ test: require('@/assets/hot/1.jpeg'),id:1,width:"70%"},
      { test: require('@/assets/hot/2.png'),id:2,width:"30%"},
      {test:require('@/assets/hot/3.png'),id:3,width: "40%"},
      {test:require('@/assets/hot/4.png'),id:4,width: "20%"},
      {test:require('@/assets/hot/5.png'),id:5,width:"40%"},
      {test: require('@/assets/hot/6.png'),id:6,width: "30%"},
      {test: require('@/assets/hot/7.png'),id:7,width: "40%"},
      {test: require('@/assets/hot/8.png'),id:8,width: "30%"}],
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
  white-space:nowrap;
}
.li{
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  position: relative;
  cursor: pointer;
  list-style: none;
  white-space:nowrap;
  line-height: 1.25;
  letter-spacing: normal;
}
</style>