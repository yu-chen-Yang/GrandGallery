<template>
<div class="icons">
  <el-row>
    <el-col :span="1"><div style="opacity: 0">排版占位</div></el-col>
    <el-col :span="6">
      <div style="text-align: center;">
      <div style="font-size: 50px;">
      <i class="el-icon-camera" style="size: A5"/>
      </div>
        <p style="font-size: 25px; margin-top: 5px; margin-bottom: 5px">趣发现</p>
        <p style="margin-top: 10px; font-weight: 5; font-size: 13px; margin-bottom: 20px">在镜头里的奇观</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 120px; height: 50px; font-size: 18px;font-weight: 400">发现好图</el-button>
      </div>
    </el-col>
    <el-col :span="5">
      <div style="text-align: center;">
        <div style="font-size: 50px;">
          <i class="el-icon-user-solid" style="size: A5"/>
        </div>
        <p style="font-size: 25px; margin-top: 5px; margin-bottom: 5px">题材圈</p>
        <p style="margin-top: 10px; font-weight: 5; font-size: 13px; margin-bottom: 20px">和志同道合者说hi</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 120px; height: 50px; font-size: 18px;font-weight: 400">加入圈子</el-button>
      </div>
    </el-col>
    <el-col :span="5">
      <div style="text-align: center;">
        <div style="font-size: 50px;">
          <i class="el-icon-trophy" style="size: A5"/>
        </div>
        <p style="font-size: 25px; margin-top: 5px; margin-bottom: 5px">活动</p>
        <p style="margin-top: 10px; font-weight: 5; font-size: 13px; margin-bottom: 20px">和志同道合者说hi</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 120px; height: 50px; font-size: 18px;font-weight: 400">活动一览</el-button>
      </div>
    </el-col>
    <el-col :span="5">
      <div style="text-align: center;">
        <div style="font-size: 50px;">
          <i class="el-icon-coin" style="size: A5"/>
        </div>
        <p style="font-size: 25px; margin-top: 5px; margin-bottom: 5px">图出售</p>
        <p style="margin-top: 10px; font-weight: 5; font-size: 13px; margin-bottom: 20px">好作品当有价</p>
        <el-button  plain style="color: #0099E5; border-color: #0099E5; width: 120px; height: 50px; font-size: 18px;font-weight: 400">了解售图</el-button>
      </div>
    </el-col>
  </el-row>
  <div class="sentence">
  <p>用尼康，让大菠萝开心！开了又开。</p>
  </div>
</div>
</template>

<script>
export default {
  name: "middle-icon"
}
</script>

<style scoped>
.sentence{
  margin-top: 80px;
  text-align: center;
  font-size: 40px;
  color: black;
  font-family: "Microsoft Sans Serif";
}
.icons{
  position: relative;
  margin-top: 50px;
  color: 	#696969;
}
</style>