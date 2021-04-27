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
      <div class="li2">登陆</div>
      <div class="hide">***</div>
      <el-button type="primary">注册</el-button>
    </div>
    <div class="carousel">
		<el-carousel :interval="3000" v-bind:height=windowHeight arrow="never">
			<el-carousel-item v-for="item in images" v-bind:key="item.id">
        <el-image
            :src="item.src"
            :fit="fit"/>
			</el-carousel-item>
			<transition name='el-zoom-in-center'>
			</transition>
		</el-carousel>

    </div>
    <div class="signIn" v-show="show">
      <p class="test">让美好被记录！</p>
      <el-button type="primary" class="button1" style="font-weight:900; color: white;">现在加入</el-button>
    </div>

  </div>
</template>

<script>
	export default {
		name: 'homeHeader',
		data: () => ({
			show: false,
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
    margin-top: -3%;
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
    margin-left: 50%;
    margin-top: -5px;
		color: #2C3E50;
		z-index: 9999;
	}
  .header{
    margin-bottom: 18%;
  }

	.signIn {
    margin-top: -25%;
		text-align: center;
	}
</style>
