<template>
<div class="icons">
  <el-row>
    <el-col :span="1"><div style="opacity: 0">排版占位</div></el-col>
    <el-col :span="6">
      <div style="text-align: center;">
      <div style="font-size: 3rem;">
      <i class="el-icon-camera" style="size: A5"/>
      </div>
        <p style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 0.5rem">趣发现</p>
        <p style="margin-top: 0.5rem; font-weight: 5; font-size: 1rem; margin-bottom: 1rem">在镜头里的奇观</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 8rem; height: 4rem; font-size: 1.2rem;font-weight: 400">发现好图</el-button>
      </div>
    </el-col>
    <el-col :span="5">
      <div style="text-align: center;">
        <div style="font-size: 3rem;">
          <i class="el-icon-user-solid" style="size: A5"/>
        </div>
        <p style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 0.5rem">题材圈</p>
        <p style="margin-top: 0.5rem; font-weight: 5; font-size: 1rem; margin-bottom: 1rem">和志同道合者说hi</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 8rem; height: 4rem; font-size: 1.2rem;font-weight: 400">加入圈子</el-button>
      </div>
    </el-col>
    <el-col :span="5">
      <div style="text-align: center;">
        <div style="font-size: 3rem;">
          <i class="el-icon-trophy" style="size: A5"/>
        </div>
        <p style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 0.5rem">活动</p>
        <p style="margin-top: 0.5rem; font-weight: 5; font-size: 1rem; margin-bottom: 1rem">和志同道合者说hi</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 8rem; height: 4rem; font-size: 1.2rem;font-weight: 400">活动一览</el-button>
      </div>
    </el-col>
    <el-col :span="5">
      <div style="text-align: center;">
        <div style="font-size: 3rem;">
          <i class="el-icon-coin" style="size: A5"/>
        </div>
        <p style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 0.5rem">图出售</p>
        <p style="margin-top: 0.5rem; font-weight: 5; font-size: 1rem; margin-bottom: 1rem">好作品当有价</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 8rem; height: 4rem; font-size: 1.2rem;font-weight: 400">了解售图</el-button>
      </div>
    </el-col>
  </el-row>

  <div class="sentence" >
  <p> 用尼康，让大菠萝开心！开了又开。</p>
  </div>
</div>
</template>

<script>
export default {
  name: "middle-icon",
  methods:{
    tosignIn:function (){
      this.$router.push({name:'signIn'});
    }
  }
}
</script>

<style scoped>
.sentence{
  margin-top: 10%;
  text-align: center;
  font-size: 2rem;
  color: grey;
  font-family: "Microsoft Sans Serif";
  font-weight: 700;
}
.icons{
  position: relative;
  margin-top: 20%;
  color: 	#696969;
}
</style>