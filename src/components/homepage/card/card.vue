<template>
<div class="back">

    <q-card class="card" >
        <div class="title" style="display:inline-block">
          <div class="row">
            <q-avatar size="4rem" class="myportrial" style="display:inline-block;margin: 1rem" >
              <img src="../../../assets/back/head1.jpg">
            </q-avatar>
            <div class="col-8">
              <div class="username" style="display:inline-block;margin-top: 1rem">{{author}}</div>
              <div style="display:inline-block;margin-left: 1.3rem; font-size: 0.8rem;color: gray">粉丝数量：0</div>
            </div>
            <div class="col">
              <div style="margin-left: 15px;margin-top: 1.5rem">
                <q-btn outline style="display:inline-block" color="primary" icon-right="add">关注</q-btn>
              </div>
            </div>
          </div>


        </div>
      <div>
        <q-img :src=imgSrc  contain  @click="showDetail" style="cursor: pointer"/>
      </div>

        <div class="ImgPart">
            <p class="description" style="size:1rem; margin-left: 0.5rem;margin-top: 0.5rem;color: gray;">{{description}}</p>
            <div class="tags" style="margin-left: 0.5rem;margin-top: 0.5rem;color: gray;">
              <div v-for="item in tags" :key="item">
                <div style="color: #0099E5">#{{item}}</div>
              </div>

            </div>
        </div>
        <HR align=center width=100% color="#DODODO" SIZE=1  style="opacity: 80%"></HR>
        <div class="foot">
            <img class="icon" src="../../../assets/icon/message-square-outline.png"  >{{comments}}
            <img class="icon" src="../../../assets/icon/heart-outline.png"  style="color: #21BA45">{{likes}}
            <img class="icon" src="../../../assets/icon/corner-down-right-outline.png" >{{favor}}
        </div>

    </q-card>
  <q-dialog v-model="detail" full-height full-width>
    <pic-detail :pic-id="imgId" :img-url="imgSrc"/>
  </q-dialog>

</div>
</template>

<script>
import PicDetail from "../../picDetail";
    export default {
      name: "card",
      components: {PicDetail},
      props:{
          imgSrc:URL,
          imgId:Number,
          description:String,
          author:String,
          likes:Number,
          comments:Number,
          favor:Number,
      },
      data(){
            return{
              detail:false,
                CardInfo:{
                    comment_number:999,
                    like_number:298,
                    tags:[],
                    info:[],
                }
            }
        },
      mounted() {
      },
      methods:{
        showDetail(){
          this.detail=true;
        },
        gettags:function (){
          this.$axios.get("http://127.0.0.1:8098/picture/getTags",{
            pictureId:8
          }).then(res=>{
            this.tags=res.data.obj;
            console.log(this.tags);
          }).catch(err=>{
            console.log(err);
          })
        },
      }
    }
</script>

<style scoped>
.card{
    width: 45rem;
    background: white;
    margin: auto;
    margin-top: 2rem;
    border-radius: 5px;
    padding-bottom: 10px;
    margin-bottom: 20px;

}
.back{
}
    .username{
        font-size: x-large;
        color: black;
        margin-top: 0px;
        font-weight: normal;
        margin-left: 20px;
        margin-right: 600px;

    }
    .picTitle{
        font-size: large;
        font-weight: bold;
        color: #2C3E50;
        margin-top: 10px;
    }
    .picComment{
        font-size: medium;
        font-weight: normal;
        color: #2C3E50;
        margin-top: 10px;
    }
.icon{
    width: 25px;
    margin-top: 10px;
    margin-left: 20px;
}

</style>
