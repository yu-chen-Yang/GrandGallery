<template>
    <div class="head-img">
        <input type="file"  id="upload" style="display:none;" accept="image/gif,image/jpeg,image/png,image/jpg" @change="freshImg"/>
        <div class="border"  @click="uploadIMg">{{headTip}}<img :src="imgsrc" class="imgDiv"></div>
        <q-input class="q-input" outlined type="text" v-model="myphone"      mask=" ### - #### - ####"
                 hint="  ### - #### - ####" />
        <q-btn @click="plus">++</q-btn>
        <q-btn @click="setphone">设置</q-btn>
        <h1>{{phone}}</h1>
        <h2>{{mybirthday}}</h2>
        <h3>{{myabout}}</h3>
        <h3>{{myemail}}</h3>
        <h3>{{mynickname}}</h3>
        <h4>{{isLogin}}</h4>
    </div>
</template>

<script>
    import store from "../store/index"
    const Counter = {
        template:'<div>{{count}}</div>',
        computed:{
            count(){
                return this.$store.state.phone;
            }
        }
    }


    export default {
        name: "test",
        data(){
            return {
                imgsrc:require('../assets/back/head1.jpg'),         //用户没有上传图片的默认头像
                headTip: "点击上传头像",
                myphone:"11111111111",
                mybirthday:this.$store.state.birthday,
                mynickname:this.$store.state.nickname,
                myemail:this.$store.state.email,
                myabout:this.$store.state.about,
                isLogin:this.$store.state.IsLogin
            }
        },
        computed:{
            phone(){
                return this.$store.state.phone;
            }
        },
        methods:{
            uploadIMg:function(){
                document.getElementById('upload').click();
            },
            freshImg:function(e){
                let _this = this;
                _this.imgObj = e.target.files['0'];               //得到上传的第一个文件
                let fr = new FileReader();                        //异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
                fr.onload=function(){                             //在读取操作完成时触发
                    _this.imgsrc = fr.result;                       // 图片文件赋值给图片标签路径
                }
                fr.readAsDataURL(_this.imgObj);                   //将读取到的文件编码成Data URL
                _this.headTip='';                                 // 清空我的提示
            },
            plus:function () {
                this.$store.commit('increment')
            },
            setphone:function () {
                this.$store.commit('setPhone',this.myphone)

            }
        }
    }
</script>

<style scoped>
    .head-img {
        text-align: center;
        margin-bottom: 0.2rem;}
    .border {
        display: inline-block;
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        border: 1px solid #c3c3c3;
        overflow: hidden;
        line-height: 5rem;
        text-align: center;
        position: relative;}
    .imgDiv {
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        border-radius:50%;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        z-index: -1;
    }


</style>
