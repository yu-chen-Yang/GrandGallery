<template>
<div style="background-color: 	#F5F5F5">
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
            class="q-mx-md"
        />

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

        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="primary" icon="cloud_upload" no-caps label="Upload" class="q-ml-sm q-px-md" />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>


    <q-drawer
        v-model="leftDrawerOpen"
        bordered
        behavior="mobile"
        @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <img class="q-pl-md" src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg">
            <span class="q-ml-sm">Photos</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md" />
          <q-item clickable class="GPL__drawer-item GPL__drawer-item--storage">
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>
            <q-item-section top>
              <q-item-label>Storage</q-item-label>
              <q-linear-progress :value="storage" class="q-my-sm" />
              <q-item-label caption>2.6 GB of 15 GB</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="GPL__page-container" style="background-color: WhiteSmoke">
      <div class="row">
        <div class="col-4">
          <q-card color="white" bordered style="height: 13rem; width: 24rem; margin-left:auto; margin-right: auto;margin-top: 2rem">
            <div style="height: 7rem">
              <div class="row">
              <q-avatar style="size: 4rem; margin: 1.5rem">
                <img :src="pic[1].pictureUrl"/>
              </q-avatar>
              <div class="col" style="font-size: 1.6rem;margin-top: 1.5rem">法国数学家菠萝</div>
              </div>
            </div>
            <q-separator/>
            <div class="row q-col-gutter-none" style="">
              <div class="col usernuminfo"  style="height:6rem;border-right: lightgray 1px solid; text-align: center;padding-top: 1.3rem">
                <p style="margin: -0.3rem;font-size: 1.5rem">10</p>粉丝</div>
              <div class="col usernuminfo"  style="cursor:pointer; height:6rem;border-right: lightgray 1px solid;text-align: center;padding-top: 1.3rem">
                <p style="margin: -0.3rem;font-size: 1.5rem">10</p>作品</div>
              <div class="col usernuminfo" style="height:6rem;text-align: center;padding-top: 1.3rem">
                <p style="margin: -0.3rem;font-size: 1.5rem">10</p>关注</div>
            </div>
          </q-card>

          <q-card color="white" bordered style="height: 15rem; width: 24rem; margin-left:auto; margin-right: auto;margin-top: 2rem">
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

          <q-card color="white" bordered style="height: 15rem; width: 24rem; margin-left:auto; margin-right: auto;margin-top: 2rem">
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
          <card :img-src=pic[0].pictureUrl />
        </div>
      </div>
    </q-page-container>
    <q-dialog v-model="detail" full-height full-width>
      <pic-detail :pic-id="pic[1].pictureId" :img-url="pic[1].pictureUrl"/>
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
    console.log(this.$store.state.isLogin);
    this.$axios.get("http://127.0.0.1:8098/picture/getPictures",{
      params:{
        category:"风景",
        page:1,
        method:""
      }
    }).then(res=>{
      this.pic=res.data.obj;
    })
  },
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      storage: 0.26,
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
