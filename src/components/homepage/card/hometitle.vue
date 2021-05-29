<template>
    <div class="header">
        <div class="menubar" >
            <ul>
                <li class="li">
                    <el-dropdown>
          <span class="el-dropdown-link" style="color: white; font-size: 1.3rem">
              发现好图<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item style="color: black">新作</el-dropdown-item>
                            <el-dropdown-item style="color: black">热门</el-dropdown-item>
                            <el-dropdown-item style="color: DarkKhaki">菠萝推荐</el-dropdown-item>
                            <el-dropdown-item style="color: black">图文</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown></li>
                <li class="hide">****</li>
                <li class="li"><el-dropdown>
          <span class="el-dropdown-link" style="color: white; font-size: 1.3rem">
              摄影师<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item style="color: black">摄影师</el-dropdown-item>
                        <el-dropdown-item style="color: black">点评人</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                </li>
                <li class="hide">****</li>
                <li class="li">活动</li>
                <li class="hide">****</li>
                <li class="li">售图</li>

                <li class="hidden">******</li>
            </ul>
        </div>
        <div class="righted">
            <div >
                <div class="hide">***</div>
                <div class="li3">{{username}}</div>
                <q-select         filled
                                  v-model="model"
                                  :options="options"
                                  option-value="id"
                                  option-label="desc"
                                  option-disable="inactive"
                                  @click="goperson"
                                  emit-value
                                  map-options
                                  :label="myname"
                                  style="min-width: 250px; max-width: 300px">
                    <template v-slot:before>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                        </q-avatar>
                    </template>




                </q-select>

            </div>

        </div>


    </div>
</template>

<script>
    import Router from 'vue-router';
    import Vue from 'vue'
    Vue.use(Router)
    export default {
        props:{
            userid:Number,
            isLogin:Boolean,
            username:String,
            userTitle:String,
            level:Number,
        },
        name: 'hometitle',
        data: () => ({
            show: false,
            avatarSrc: require("@/assets/cursorPineapple.png"),
            images: [
                {
                    // eslint-disable-next-line no-mixed-spaces-and-tabs
                    id:1,
                    src: require('@/assets/home/1.png')
                }, {
                    // eslint-disable-next-line no-mixed-spaces-and-tabs
                    id:2,
                    src: require('@/assets/home/5.png')
                },{
                    // eslint-disable-next-line no-mixed-spaces-and-tabs
                    id:3,
                    src: require('@/assets/home/2.png')
                },
                {
                    id:4,
                    src: require('@/assets/home/4.png')
                },
                {
                    // eslint-disable-next-line no-mixed-spaces-and-tabs
                    id:5,
                    src: require('@/assets/home/3.png')
                }],
            video: require('@/assets/video/final.mp4'),
            windowHeight: document.documentElement.clientHeight*0.75+"px",
            windowWidth: "",
            username: "YYC",
            myname:"杨宇成",
            options: [
                {
                    id: 'goog',
                    desc: '个人信息'
                },
                {
                    id: 'fb',
                    desc: 'Facebook'
                },
                {
                    id: 'twt',
                    desc: 'Twitter'
                },
                {
                    id: 'app',
                    desc: 'Apple'
                },
            ],
            dense: false,
            denseOpts: false
        }),
        mounted: function() {
            console.log(this.show)
            setTimeout("", 2000)
            this.show = true;
            // <!--把window.onresize事件挂在到mounted函数上-->
        },
        methods: {
            setImg:function (){
                // eslint-disable-next-line no-mixed-spaces-and-tabs
                console.log(111);return this.windowHeight*0.6;
            },
            toSignIn:function (){
                this.$router.push({name:'signIn'})
            },
            toRegist:function () {
                this.$router.push({name:'regist'})

            },
            goperson:function () {

                    this.$router.push({name:'regist'})

            }



        },
        watch: {
            windowHeight:function () {
                return document.documentElement.clientHeight*0.75;
            },
            windowWidth (val) {
                let that = this;
                console.log("实时屏幕宽度：",val, that.windowHeight );
            }
        },
    }
</script>
<style>
    .li{
        font-size: 1.3rem;
        font-weight: 600;
        color: white;
        position: relative;
        cursor: pointer;
        list-style: none;
        display: inline;
        line-height: 1.25;
        letter-spacing: normal;
    }

    .nameappend{
        color: white;
        font-size: large;
        font-weight: bold;
    }
    .righted{
        margin-top: -2.5rem;
        margin-left: 80%;
        z-index: 9999;
        position: relative;
        color: white;
    }
    .li2{
        font-size: 1.3rem;
        font-weight: 600;
        color: white;
        position: relative;
        cursor: pointer;
        list-style: none;
        display: inline;
        line-height: 1.25;
        letter-spacing: normal;
    }
    .li3{
        font-size: 1.3rem;
        margin-bottom: 1.2rem;
        font-weight: 600;
        color: white;
        position: relative;
        cursor: pointer;
        list-style: none;
        display: inline;
        line-height: 1.25;
        letter-spacing: normal;
    }
    .hide{
        font-size: 1.3rem;
        font-weight: 600;
        color: white;
        cursor: pointer;
        list-style: none;
        display: inline;
        line-height: 1.25;
        letter-spacing: normal;
        opacity: 0;
    }
    .menubar{
        margin-top: 0%;
        margin-left: 8%;
        position: relative;
        z-index: 9999;
    }


    .header{
        margin-bottom: 18%;
    }

</style>
