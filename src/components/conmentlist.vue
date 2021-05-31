<template>
  <q-infinite-scroll @load="onLoad" :offset="250">
    <div v-for="i in 20" :key="i" class="caption">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>

    </div>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script>
export default {
  name: "conmentlist"
}
</script>

<style scoped>

</style>