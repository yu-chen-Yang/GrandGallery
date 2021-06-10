<template>
    <div style="background-color: gray">
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

            <q-btn v-if="$q.screen.gt.xs"  @click="upload=true" flat dense no-wrap color="primary" icon="cloud_upload" no-caps label="Upload" class="q-ml-sm q-px-md" />

            <q-space />
            <div class="mainbtn" @click="jump" style=" border: 1px solid; border-radius:5px; padding-left: 20px;padding-right: 20px;padding-top: 10px;padding-bottom: 10px">
              杨宇辰
            </div>

          </q-toolbar>
        </q-header>
        <q-parallax
            src="http://grandgallery-image.test.upcdn.net/material1.jpg" height="800">
        </q-parallax>
        <q-bar style="height: 11rem;margin-top: -3rem; background: white">
          <div class="portrial" >
            <q-avatar size="90px" class="myportrial" style="border: solid whitesmoke 2px">
              <img src="../assets/cursorPineapple.png"/>
            </q-avatar>
            <h3 style="margin-top: -0.5rem; margin-left: 40rem">{{userid}}</h3>
            <p style="margin-top: -2rem;color: gray; margin-left: 40rem">{{position}}  |  a关注 {{follows}}| 粉丝 {{followers}}</p>

          </div>
        </q-bar>
        <div style="height: 3rem;background: white;border-top: solid 1px lightgray;border-bottom: solid 1px lightgray;margin-bottom: 2rem;">
        <div class="row" style="padding-top: 0.7rem">
          <div class="col-5"/>
          <div class="col">
            <div class="row" style="margin-left: 3rem">
            <div class="col switch" @click="showpic=1">
              作品
            </div>
              <div class="col switch" @click="showpic=2">
                推荐
              </div>
              <div class="col switch" @click="showpic=3">
                荣誉
              </div>
            </div>
          </div>
          <div class="col-5"></div>
        </div>
        </div>
        <div style="margin-left: 4rem;margin-right: 4rem">
          <div v-if="showpic===1">
            <hot/>
          </div>
          <div v-else-if="showpic===2">
            <perfer/>
          </div>
          <div v-else style="text-align: center;height: 30rem">
            暂无
          </div>
        </div>

    </q-layout>
    </div>
</template>

<script>


    import Hot from "../components/homepage/card/hot";
    import perfer from "../components/homepage/card/perfer";
    export default {
        name: "personalpage",
      components: {Hot,perfer},
      data () {
            return{
                userid:-1,
                isLogin:true,
                username:"yyc",
                userTitle:"",
                level:0,
                position:"上海",
                followers:"9999",
                follows:"25",
                showpic:1,
            }
        },
      created() {
        this.userid=this.$store.getters.cid;
      },
      methods:{
            tofollow:function () {
                this.$router.push({name:'information'});
            },
          jump:function (){
              this.$router.push({name:"mainPage"});
          }
        },
        watch:{
            app: function(){
                return{
                    height:document.documentElement.clientHeight,
                    width:document.documentElement.clientWidth,
                }
            }
        }
    }

</script>

<style scoped>
    #personalpage{
        background-size: 100% 100%;
        height: 50rem;
        position: relative;
        width: 100%
    }
    .portrial{
        position: relative;
        margin-left:60rem;
        margin-right: auto;
        size:100px;
        text-align: center;
    }
    .myportrial{
        background: white;
        margin-left: auto;
        margin-left: 40rem;
    }
    h1{
        margin-top: 0px;
        color: white;
        font-weight: bold;
        font-size: 60px;
        margin-bottom: 0;
    }
    h2{
        color: white;
        font-size: 20px;
        margin-top: 0;
    }
    .preview{
        margin-top: 0;
    }
    .g-button{
        margin-left: 80%;
    }
.mainbtn:hover {
  cursor: pointer;
  color: #409EFF;
  border-color: #409EFF;
}

    .switch:hover {
      color: #409EFF;
      cursor: pointer;
    }
</style>
