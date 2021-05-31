<template>
<div>
      <div style="height: auto; margin: 1px" >
        <div class="row">
          <q-avatar style="margin: 5px;" size="1.5rem">
            <img  :src=avator>
          </q-avatar>
          <div class="col">
            <p style="margin: 5px; font-size: 1rem;" >{{uname}}1</p>
            <div style="margin: 5px;font-size: 0.6rem">
              {{sentence}}2
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: "conment",
  props:{
    avatar:String,
    uname:String,
    sentence:String,
  }
}
</script>

<style scoped>

</style>