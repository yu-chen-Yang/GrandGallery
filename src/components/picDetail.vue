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
           <p style="margin: 15px; font-size: 1rem;" >{{author}}</p>
           <div style="margin: 15px">
             <div v-if="!isfriend">
             <q-btn    outline color="primary" label="关注" size="sm" @click="this.addfriend" />
             </div>
             <div  v-else>
               <q-btn   outline color="primary" label="已关注" size="sm" @click="this.deletefriend"/>
             </div>

           </div>

           </div>
           </div>
           <q-separator/>
           <div class="row" style=" height: 2rem; text-align: center">
             <div class="col icon" style=" border-right: lightgray 1px solid">
               <div v-if="!islike"  style="margin-top: 0.3rem" @click="likepicture">
               点赞
               </div>
               <div v-if="islike" style="margin-top: 0.3rem" @click="dislikepicture">
                 已点赞
               </div>
             </div>
             <div class="col icon" >
               <div v-if="!isfavor" style="margin-top: 0.3rem" @click="favouritepicture">
                 收藏
               </div>
               <div v-if="isfavor" style="margin-top: 0.3rem" @click="disfavourite">
                 已收藏
               </div>
             </div>
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
                <q-btn class="q-col" icon="send" type="submit" color="primary" @click="login" size="sm" style="height:2rem;margin-top: 1rem;width: 3rem"/>
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
    author:String,
  },
  data () {
    return {
      show: false,
      conments:[{name:"yyc",sentence:"拍的好啊"},{name:"zjh",sentence: "真不错"}],

      userInfo:{name:"cjq",title:"big FW"},
      src:  require('@/assets/hot/3.png'),
      avator: require("@/assets/cursorPineapple.png"),
      islike:false,
      isfavor:false,
      isfriend:false,
    }
  },
  methods:{
    checkLike:function (){
      this.$axios.get("http://127.0.0.1:8098/user/isLike",{
        userId:this.$store.getters.UID,
        pictureId:this.picId,
      }).then(res=>{
        this.islike=res.data.obj;
      })
    },
    checkfavourite:function(){
      this.$axios.get("http://127.0.0.1:8098/user/isFavourite",{
        userId:this.$store.getters.UID,
        pictureId:this.picId,
      }).then(res=>{
        this.isfavor=res.data.obj;

      })
    },
    checkfriend:function (){
      this.$axios.get("http://127.0.0.1:8098/user/isFriend",{
        params:{
          userId1:this.$store.getters.UID,
          userId2:this.authorId,
        }
      }).then(res=>{
        this.isfriend=res.data.obj;
      })
    },
    addfriend:function (){
      console.log("add")
      this.$axios.get("http://127.0.0.1:8098/user/addFriend",{
        params:{
          userId1:this.$store.getters.UID,
          userId2:this.authorId,
        }
      }).then(res=>{
        if (res.data.code == 200) {
          this.isfriend=true
        }
      })
    },
    deletefriend:function(){
      this.$axios.get("http://127.0.0.1:8098/user/deleteFriend",{
        params:{
          userId1:this.$store.getters.UID,
          userId2:this.authorId,
        }
      }).then(res=>{
        if (res.data.code == 200) {
          this.isfriend=false
        }
      })
    },
    likepicture:function (){
      this.$axios.post("http://127.0.0.1:8098/user/likePicture",{
        userId:this.$store.getters.UID,
        pictureId:this.picId,
      }).then(res=>{
        if (res.status == 200)
          this.islike =false
      })
    },
    dislikepicture:function(){
      this.$axios.post("http://127.0.0.1:8098/user/dislikePicture",{
        userId:this.$store.getters.UID,
        pictureId:this.picId,
      }).then(res=>{
        if (res.status == 200)
          this.islike=false
      })
    },
    favouritepicture:function (){
      this.$axios.post("http://127.0.0.1:8098/user/favouritePicture",{
        userId:this.$store.getters.UID,
        pictureId:this.picId,
      }).then(res=>{
        if (res.status == 200)
          this.isfavor=true
      })
    },
    disfavourite:function (){
      this.$axios.post("http://127.0.0.1:8098/user/disfavouritePicture",{
        userId:this.$store.getters.UID,
        pictureId:this.picId,
      }).then(res=>{
        if (res.status == 200)
          this.isfavor=false
      })
    }
  },
  computed:{
    Height() {
      return 750+'px';
    },


  },
  created() {
    this.checkfriend();
    this.checkfavourite();
    this.checkLike();
  },
}
</script>

<style scoped>

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