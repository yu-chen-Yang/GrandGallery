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
      <div v-if="isLogin">
        <q-avatar>
          <img :src=avatarSrc>
        </q-avatar>
        <div class="hide">***</div>
        <div class="li3">{{username}}</div>
      </div>
      <div v-else>
        <div class="li2" v-on:click="toSignIn">登陆</div>
        <div class="hide">***</div>
        <el-button type="primary" v-on:click="toSignIn">注册</el-button>
      </div>
    </div>
    <div class="carousel">
      <video muted v-bind:src="video" v-bind:controls="false" autoplay="autoplay" loop="loop" width="100%"></video>
    </div>
    <div class="signIn" v-show="show">
      <p class="test">Every single moment is unexperienced</p>
      <el-button type="primary" class="button1" style="font-weight:900; color: white;" v-on:click="toSignIn">现在加入</el-button>
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
		name: 'homeheader',
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
.righted{
  margin-top: -2.5rem;
  margin-left: 80%;
  z-index: 9999;
  position: relative;
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
	.carousel {
    position: relative;
    margin-top: -4%;
		text-align: center;
    z-index: 100;
	}
	.test {
    position: relative;
		margin-top: -5rem;
		font-size: 5rem;
		font-weight: 800;
		color: whitesmoke;
		z-index: 9999;
	}
	.button1 {
		font-weight: 200;
    position: relative;
    margin-top: -5px;
		color: #2C3E50;
		z-index: 9999;
	}
  .header{
    margin-bottom: 18%;
  }

	.signIn {
    margin-top: -35%;
		text-align: center;
	}
</style>
