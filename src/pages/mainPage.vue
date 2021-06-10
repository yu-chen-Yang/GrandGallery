<template>
<div style="background-color: 	#F5F5F5">
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">

        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <span class="q-ml-sm">The Grand Gallery</span>
        </q-toolbar-title>

        <q-space />

        <q-input class="GPL__toolbar-input" dense  outlined v-model="search" placeholder="Search">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <q-btn v-if="$q.screen.gt.xs"  @click="upload=true" flat dense no-wrap color="primary" icon="cloud_upload" no-caps label="Upload" class="q-ml-sm q-px-md" />

        <q-space />

      </q-toolbar>
    </q-header>

    <q-page-container class="GPL__page-container" style="background-color: WhiteSmoke">
      <div class="row">
        <div class="col-4">
          <q-card color="white" bordered style="height: 13rem; width: 24rem; margin-left:auto; margin-right: auto;margin-top: 2rem">
            <div style="height: 7rem">
              <div class="row">
              <q-avatar style="size: 4rem; margin: 1.5rem">
                <img :src="pic[1].pictureUrl"/>
              </q-avatar>
              <div class="col" style="font-size: 1.6rem;margin-top: 1.5rem">{{this.$store.getters.nickname}}</div>
              </div>
            </div>
            <q-separator/>
            <div class="row q-col-gutter-none" style="">
              <div class="col usernuminfo"  style="height:6rem;border-right: lightgray 1px solid; text-align: center;padding-top: 1.3rem">
                <p style="margin: -0.3rem;font-size: 1.5rem">10</p>粉丝</div>
              <div class="col usernuminfo" @click="topersonal()" style="cursor:pointer;  height:6rem;border-right: lightgray 1px solid;text-align: center;padding-top: 1.3rem">
                <p style="margin: -0.3rem;font-size: 1.5rem">10</p>作品</div>
              <div class="col usernuminfo" style="height:6rem;text-align: center;padding-top: 1.3rem">
                <p style="margin: -0.3rem;font-size: 1.5rem">10</p>关注</div>
            </div>
          </q-card>

          <q-card color="white" bordered style="cursor: pointer; height: 15rem; width: 24rem; margin-left:auto; margin-right: auto;margin-top: 2rem">
            <div class="row justify-between">
                <q-parallax style="height: 12rem">
                  <template v-slot:media>
                    <video poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
                      <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm">
                      <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4">
                    </video>
                  </template>
                  <h3 class="text-white">倾听</h3>
                  <p class="text-white" style="margin-top: -2rem">截稿时间6月30日</p>
              </q-parallax>
              <p style="margin-top: 1rem;margin-left: 1rem; color: gray;">倾听    CEED公益组织</p>
            </div>
          </q-card>

          <q-card color="white" bordered style="cursor: pointer;height: 15rem; width: 24rem; margin-left:auto; margin-right: auto;margin-top: 2rem">
            <div class="row justify-between">
              <q-parallax
                  src="http://grandgallery-image.test.upcdn.net/material1.jpg"
                  style="height: 12rem"> <h3 class="text-white">上海腔调</h3>
                <p class="text-white" style="margin-top: -2rem">截稿时间7月21日</p>
              </q-parallax>
              <p style="margin-top: 1rem;margin-left: 1rem; color: gray;">上海街拍主题摄影大赛  上海大学摄影社</p>
            </div>
          </q-card>

        </div>
        <div class="col-6">
          <div v-for="item in pic" :key="item.pictureId">
            <card :img-src="item.pictureUrl" :img-id="item.pictureId" :description="item.description" :author="item.uploaderName"
             :comments="item.commentCount" :favor="item.favouritesCount" :likes="item.likesCount"   :up-id="item.uploaderId"/>
          </div>

        </div>
      </div>
    </q-page-container>
    <q-dialog v-model="upload" >
      <q-card style="height: 30rem;width: 50rem">
        <div class="row">
        <q-uploader
            url="http://localhost:4444/upload"
            style="max-width: 300px" class="col"
        />
          <q-btn label="up" @click="uploadFiles" color="primary" class="col" style="margin:3rem;"/>
        </div>

        <q-input style="margin: 3rem" outlined />
        <q-select filled v-model="model" :options="options" label="Filled" />
      </q-card>

    </q-dialog>

    <q-dialog v-model="detail" full-height full-width>
      <pic-detail :pic-id="checkid" :img-url="checkurl" />
    </q-dialog>
  </q-layout>
</div>
</template>

<script>
import PicDetail from "../components/picDetail";
import Card from "../components/homepage/card/card";
export default {
  name: "mainPage",
  components: {Card, PicDetail},
  created() {
    if(this.$store.getters.isLogin===false){
      this.$router.push({name:"signIn"});
    }
    console.log(this.$store.getters.UID);
    this.$axios.get("http://127.0.0.1:8098/picture/getPictures",{
      params:{
        page:1,
      }
    }).then(res=>{
      console.log(res.data.obj);
      this.pic=res.data.obj;
    })
  },
  methods:{
    topersonal:function (){
      this.$store.commit("setcid",this.$store.getters.UID);
      this.$router.push({name:'Personalpage'})
    },
    uploadFiles:function (){
      this.detail=false;
      let formdata=new FormData();
      console.log(this.file);
      formdata.append('file',this.file);
      formdata.append('categoryname',"风景");
      formdata.append('description',"上传测试");
      formdata.append('picturename',"上传测试");
      formdata.append("userid",4)
      this.$axios.post("http://127.0.0.1:8098/picture/uploadPicture",{
        data:formdata,
        headers:{"Content-Type":"multipart/form-data"}
      }).then(res=>{
        console.log(this.file)
        console.log(res.code)
      }).catch(err=>{
        console.log(err)
      })
    },
    check:function (){
      console.log(this.upurl);
    },
    uploadIMg(){
      console.log("up");
    }
  },
  data () {
    return {
      options:["风景","动物","人物","纪实","新闻"],
      upurl:"",
      model:"",
      leftDrawerOpen: false,
      search: '',
      storage: 0.26,
      checkid:"",
      checkurl:URL,
      upload:false,
      links1: [
        { icon: 'photo', text: 'Photos' },
        { icon: 'photo_album', text: 'Albums' },
        { icon: 'assistant', text: 'Assistant' },
        { icon: 'people', text: 'Sharing' },
        { icon: 'book', text: 'Photo books' }
      ],
      pic:[],
      detail:false
    }

  }
}
</script>

<style scoped>
.usernuminfo:hover,
.server-table i.el-tooltip:hover {
  color: #409EFF;
}
</style>
