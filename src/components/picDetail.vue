<template>
  <div>
    <q-card style="width: available; height: 50rem" >
      <div class="row">
      <div class="col-9" style="border-color: #21BA45;border-width: 10px;text-align: center;align-items: center;">
        <q-card-section>
          <q-img :src="imgUrl" style="max-height: 43rem;max-width: 50rem;margin-top: auto;margin-bottom:auto; z-index: 999" contain/>
        </q-card-section>
      </div>
        <div class="col-3" style="border-left:solid 1px lightgrey;">
         <div style="height: 250px; margin: 1px;" >
           <div class="row">
           <q-avatar style="margin: 15px" size="4rem">
             <img  :src=avator>
           </q-avatar>
           <div class="col">
           <p style="margin: 15px; font-size: 1.2rem;" >{{userInfo.name}}fasf</p>
           <div style="margin: 15px">
             <q-btn outline color="primary" label="关注" size="sm"/>
           </div>

           </div>
           </div>
           <q-separator/>
           <div class="gutter-xl" style="font-size: 1rem; margin-bottom: 1rem">
             <q-icon class=" icon" name="favorite_border" />5
             <q-icon name="star_border" class="icon"/>5
           </div>
           <q-separator/>
           <div class="decription">
           </div>
         </div>
          <div style="margin-top: 2rem; height: 27rem; overflow: scroll; margin-right: 1px;margin-left: 1px;width: 30rem;"  >
            <q-separator/>
            <div class="row" style="margin-right: 1px; background-color: 	whitesmoke">
              <q-input
                  outlined
                  v-model="readerId"
                  label="发表评论"
                  lazy-rules
                  class="q-col makeconment"
              />
                <q-btn class="q-col" icon="send" type="submit" color="primary" v-on:click="login" size="sm" style="height:2rem;margin-top: 1rem;width: 3rem"/>
            </div>
            <q-separator style="margin-bottom: 2rem"/>
            <conment v-for="item in conments" :key="item.name" :sentence="item.sentence" :uname="item.name"/>

          </div>
        </div>
      </div>
    </q-card>
    <q-dialog v-model="show" full-width full-height>
      <pic-detail  :img-url="this.imgUrl" :pic-id="this.picId"/>
    </q-dialog>

  </div>

</template>

<script>
import conment from "./conment";
export default {
  name: "picDetail",
  components:{
    conment,
  },
  props:{
    authorId:String,
    imgUrl:URL,
    picId:String,
  },
  data () {
    return {
      show: false,
      conments:[{name:"yyc",sentence:"拍的好啊"},{name:"zjh",sentence: "真不错"}],

      userInfo:{name:"cjq",title:"big FW"},
      src:  require('@/assets/hot/3.png'),
      avator: require("@/assets/cursorPineapple.png"),
    }
  },
  computed:{
    Height() {
      return 750+'px';
    }
  }
}
</script>

<style scoped>

.icon {
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-left: 2rem;
}
.icon:hover,
.server-table i.el-tooltip:hover {
  cursor: pointer;
  color: #409EFF;
}
.decription{
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
  font-family: arial;
}
.rightcard{
  margin-top: -20px;

}
.makeconment{
  margin-top: 0.5rem;
  margin-left: 0.3rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  width: 16rem;
}
</style>