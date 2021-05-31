<template>
<div class="back">

    <div class="card">
        <div class="title" style="display:inline-block">
            <q-avatar size="80px" class="myportrial" style="display:inline-block;margin-left: 20px" >
                <img src="../../../assets/back/head1.jpg">
            </q-avatar>
            <div class="username" style="display:inline-block">{{CardInfo.username}}</div>
            <q-btn outline style="display:inline-block">关注</q-btn>

        </div>

        <div class="ImgPart">
            <img class="img" src="../../../assets/home/1.png">
            <div class="picTitle" style="display:inline-block">{{CardInfo.title}}</div>
            <div class="picComment" style="display:inline-block">{{CardInfo.about}}</div>
        </div>
        <HR align=center width=100% color="#DODODO" SIZE=1  style="opacity: 80%"></HR>
        <div class="foot">
            <img class="icon" src="../../../assets/icon/message-square-outline.png" @click="toComment" >{{CardInfo.comment_number}}
            <img class="icon" src="../../../assets/icon/heart-outline.png" @click="toCollect" style="color: #21BA45">{{CardInfo.like_number}}
            <img class="icon" src="../../../assets/icon/corner-down-right-outline.png" @click="toForward" >

        </div>
    </div>

    <div class="card">
        <div class="title" style="display:inline-block">
            <q-avatar size="80px" class="myportrial" style="display:inline-block;margin-left: 20px" >
                <img src="../../../assets/back/head1.jpg">
            </q-avatar>
            <div class="username" style="display:inline-block">{{CardInfo.username}}</div>
            <q-btn outline style="display:inline-block">关注</q-btn>

        </div>

        <div class="ImgPart">
            <img class="img" src="../../../assets/home/1.png">
            <div class="picTitle" style="display:inline-block">{{CardInfo.title}}</div>
            <div class="picComment" style="display:inline-block">{{CardInfo.about}}</div>
        </div>
        <HR align=center width=100% color="#DODODO" SIZE=1  style="opacity: 80%"></HR>
        <div class="foot">
            <img class="icon" src="../../../assets/icon/message-square-outline.png" @click="toComment" >{{CardInfo.comment_number}}
            <img class="icon" src="../../../assets/icon/heart-outline.png" @click="toCollect" style="color: #21BA45">{{CardInfo.like_number}}
            <img class="icon" src="../../../assets/icon/corner-down-right-outline.png" @click="toForward" >

        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "card",
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
        }
    }
</script>

<style scoped>
.card{
    width: 55rem;
    background: whitesmoke;
    margin: auto;
    margin-top: 50px;

    border-radius: 5px;
    padding-bottom: 10px;
    margin-bottom: 20px;

}
.back{
    padding-top: 100px;
    background: darkgray;
    background-size: 100% 100%;
    height: 10000px;

}
    .username{
        font-size: x-large;
        color: black;
        margin-top: 0px;
        font-weight: normal;
        margin-left: 20px;
        margin-right: 600px;

    }
    .img{
        width: 92%;
        margin-left: 4%;
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
