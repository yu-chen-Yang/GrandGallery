<template>
<div class="back">

    <q-card class="card">
        <div class="title" style="display:inline-block">
          <div class="row">
            <q-avatar size="4rem" class="myportrial" style="display:inline-block;margin: 1rem" >
              <img src="../../../assets/back/head1.jpg">
            </q-avatar>
            <div class="col-8">
              <div class="username" style="display:inline-block;margin-top: 1rem">{{CardInfo.username}}</div>
              <div style="display:inline-block;margin-left: 1.3rem; font-size: 0.8rem;color: gray">粉丝数量：0</div>
            </div>
            <div class="col">
              <div style="margin-left: 15px;margin-top: 1.5rem">
                <q-btn outline style="display:inline-block" color="primary" icon-right="add">关注</q-btn>
              </div>
            </div>
          </div>


        </div>
      <q-img :src=imgSrc  contain/>
        <div class="ImgPart">
            <div class="picTitle" style="display:inline-block">{{CardInfo.title}}</div>
            <div class="picComment" style="display:inline-block">{{CardInfo.about}}</div>
        </div>
        <HR align=center width=100% color="#DODODO" SIZE=1  style="opacity: 80%"></HR>
        <div class="foot">
            <img class="icon" src="../../../assets/icon/message-square-outline.png" @click="toComment" >{{CardInfo.comment_number}}
            <img class="icon" src="../../../assets/icon/heart-outline.png" @click="toCollect" style="color: #21BA45">{{CardInfo.like_number}}
            <img class="icon" src="../../../assets/icon/corner-down-right-outline.png" @click="toForward" >
        </div>
    </q-card>


</div>
</template>

<script>
    export default {
      name: "card",
      props:{
          imgSrc:URL,
      },
        data(){
            return{
                CardInfo:{
                    username:"yyc",
                    title:"我是标题",
                    about:"视觉中国专业编辑团队借助机器算法和人工筛选，发现高质量、有商业价值的图片作品， 然后发起“约稿”，接到“约稿”邀请的500px会员，即使你不是签约供稿人，也能提交被邀约的图片进入视觉中国图片库获得销售机会！",
                    comment_number:999,
                    like_number:298
                }
            }
        },
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
