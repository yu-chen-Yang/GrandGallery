<template>
	<div class="header">
    <div class="menubar" >
      <ul>
        <li class="li">
          <el-dropdown>
          <span class="el-dropdown-link" style="color: white; font-size: 18px">
              发现好图<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item style="color: black">新作</el-dropdown-item>
            <el-dropdown-item style="color: black">热门</el-dropdown-item>
            <el-dropdown-item style="color: DarkKhaki">菠萝推荐</el-dropdown-item>
            <el-dropdown-item style="color: black">图文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></li>
        <li class="hidden">***</li>
        <li class="li"><el-dropdown>
          <span class="el-dropdown-link" style="color: white; font-size: 18px">
              摄影师<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item style="color: black">摄影师</el-dropdown-item>
            <el-dropdown-item style="color: black">点评人</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </li>
        <li class="hidden">***</li>
        <li class="li">活动</li>
        <li class="hidden">***</li>
        <li class="li">售图</li>

        <li class="hidden">******</li>
        <li class="li"><el-button type="primary" size="small">注册</el-button></li>
      </ul>
    </div>
    <p class="li2">登陆</p>
    <div class="carousel">
		<el-carousel :interval="3000" height="500pt" arrow="never">
			<el-carousel-item v-for="item in images" v-bind:key="item.id">
        <el-image
            :src="item.src"
            :fit="fit"/>
			</el-carousel-item>
			<transition name='el-zoom-in-center'>
				<div class="signIn" v-show="show">
					<p class="test">让美好被记录！</p>
					<el-button type="primary" class="button1" style="font-weight:900; color: white;">现在加入</el-button>
				</div>
			</transition>
		</el-carousel>
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
        }]
		}),
		mounted: function() {
			console.log(this.show)
			setTimeout("", 2000)
			this.show = true;
			console.log(this.show)
			// 首次加载时,需要调用一次
			this.screenWidth = window.innerWidth;
			this.setSize();
			// 窗口大小发生改变时,调用一次
			window.onresize = () => {
				this.screenWidth = window.innerWidth;
				this.setSize();
			}
		},
		methods: {
			setSize: function() {
				// 通过浏览器宽度(图片宽度)计算高度
				this.bannerHeight = 400 / 1920 * this.screenWidth;
			}
		}
	}
</script>
<style>

.li{
  font-size: 18px;
  font-weight: 200;
  color: white;
  position: relative;
  cursor: pointer;
  list-style: none;
  display: inline;
  line-height: 1.25;
  letter-spacing: normal;
}
.li2{
  font-size: 18px;
  font-weight: 200;
  color: white;
  right: 10%;
  position: fixed;
  cursor: pointer;
  list-style: none;
  display: inline;
  line-height: 1.25;
  letter-spacing: normal;
}
.hidden{
  font-size: 18px;
  font-weight: 400;
  color: white;
  opacity: 0;
  position: relative;
  cursor: pointer;
  list-style: none;
  display: inline;
  line-height: 1.25;
  letter-spacing: normal;
}
.menubar{
  margin-top: 120px;
  margin-left: 50px;
  position: absolute;
  z-index: 9999;
}
	.carousel {
		margin-top: -170px;
		margin-left: -10px;
		margin-right: -10px;
		text-align: center;
	}
	.test {
		position: relative;
		top: 300px;
		font-size: 50px;
		font-weight: 800;
		color: whitesmoke;
		z-index: 9999;
	}

	.button1 {
		position: relative;
		top: 290px;
		font-weight: 200;
		color: #2C3E50;
		width: 150px;
		height: 50px;
		z-index: 9999;
	}

	.el-carousel__item {
		z-index: 100;
		color: #475669;
		font-size: 14px;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.signIn {
		text-align: center;
	}
</style>
