<template>
    <div id="information">
        <hometitle class="header"></hometitle>
        <form id="infocard">
            <div id="info" style="float:left" >

                <label class="checkinfo">昵称</label>
                <q-input class="q-input" outlined type="text" v-model="mynickname" />
                <div class="clear"></div>

                <label class="checkinfo">头像</label>
                <div class="head-img">
                    <div class="border"  @click="uploadIMg">{{headTip}}<img :src="imgsrc" class="imgDiv"></div>
                    <input type="file"  id="upload" style="display:none;" accept="image/gif,image/jpeg,image/png,image/jpg" @change="freshImg"/>
                </div>

                <div class="clear"></div>
                <label class="checkinfo">生日</label>
                <q-input class="q-input" outlined type="text" v-model="mybirthday"
                         mask="####/##/##"
                         fill-mask
                         hint="例如: 1999/12/29"/>

                <div class="clear"></div>
                <label class="checkinfo">关于您</label>
                <div  style="max-width: 100%">
                    <q-input class="aboutme"
                            v-model="myabout"
                            outlined
                            type="textarea"
                            :aria-placeholder="about"
                    />
                </div>

                <div class="clear"></div>
                <label class="checkinfo">性别</label>
                <div class="chooseGender">
                    <q-radio  v-model="gender" val="male" label="男" />
                    <q-radio  v-model="gender" val="female" label="女" />

                </div>

            </div>
            <div id="account" style="float:left">
                <label class="checkinfo">电子邮箱</label>
                <q-input class="q-input" outlined type="text" v-model="myemail"   />
                <div class="clear"></div>

                <label class="checkinfo">手机号码</label>
                <q-input class="q-input" outlined type="text" v-model="myphone"       mask=" ### - #### - ####"
                         hint="  ### - #### - ####" />

                <q-btn class="save" style="float: right" color="primary"   v-on:click="tosave" label="保存"/>
                <div class="setting-avatar">
                </div>
            </div>
            <div id="account2" style="float:left">
                <label class="checkinfo">你的标签</label>
                <q-input class="q-input" outlined type="text" v-model="mylabel"   />
                <div class="clear"></div>

                <label class="checkinfo">UID</label>
                <q-input class="q-input" outlined type="text" v-model="UID"
                         readonly="readonly" unselectable="on"/>

            </div>

        </form>
    </div>
</template>

<script>
    import hometitle from "../components/homepage/card/hometitle";
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import passwordMeter from "vue-simple-password-meter";
    import store from "../store/index"
    import homeheader from "../components/homepage/header";

    Vue.use(VueAxios, axios)
    export default {
        props:{
            mylabel:String,
            UID:{
                type:String,
                default: '0001'
            }
        },
        name: "information",
        components:{
            hometitle
        },
        data(){
            return{　　
                imgsrc:require('../assets/cursorPineapple.png'),         //用户没有上传图片的默认头像
                headTip: "点击上传头像",
                gender: 'male',
                myphone:this.$store.state.phone,
                mybirthday:this.$store.state.birthday,
                mynickname:this.$store.state.nickname,
                myemail:this.$store.state.email,
                myabout:this.$store.state.about
               // birthday:"1999.12.29"
            }

        },
        computed:{
            phone(){
                return this.$store.state.phone;
            },

            birthday(){
                return this.$store.state.birthday;
            },
            about(){
                return this.$store.state.about;
            },
            nickname(){
                return this.$store.state.nickname;
            },
            email(){
                return this.$store.state.email;
            },
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
            tosave:function () {
                this.$store.commit('setPhone',this.myphone)
                this.$store.commit('setNickname',this.mynickname)
                this.$store.commit('setEmail',this.myemail)
                this.$store.commit('setAbout',this.myabout)
                this.$store.commit('setBirthday',this.mybirthday)


            }
        }
    }
</script>

<style scoped>
#information {
    background: url("../assets/back/back5.jpg");
    background-size: 100% 100%;
    height: 70rem;
    position: fixed;
    width: 100%

}
.header{
    margin-bottom: 20px;
}
#infocard{
    margin: auto;

}
#info{
    background: white;
    background-size: 100% 100%;
    width: 32%;
    border: #C10015;
    border-color: #C10015;
    border-width: 100px;
    border-radius:8px 8px 8px 8px;
    opacity: 85%;
    margin-right: 2%;
    margin-left: 18%;
    height: 55rem;
    padding-top: 1rem;

}
#account{
    background: white;
    width: 32%;
    border: #C10015;
    border-color: #C10015;
    border-width: 100px;
    border-radius:8px 8px 8px 8px;
    opacity: 85%;
    height: 25rem;
    padding-top: 2rem;
}
#account2{
    background: white;
    width: 32%;
    border: #C10015;
    border-color: #C10015;
    border-width: 100px;
    border-radius:8px 8px 8px 8px;
    opacity: 85%;
    height: 25rem;
    padding-top: 1rem;
    margin-top: 2rem;
}
.q-input{
    width: 80%;
    margin-left: 10%;
    margin-top: 0;

}
.checkinfo{
    margin-left: 10%;
    font-size: 150%;
    padding-top: 300px;

}
.save{
    margin-top: 38rem;
    width: 10rem;
    height: 2rem;
}
.clear{
        margin-top: 1.8rem;
}
.head-img {
    text-align: center;
    margin-bottom: 0.2rem;
    font-size: 25px;
}
.border {
    display: inline-block;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid #c3c3c3;
    overflow: hidden;
    line-height: 5rem;
    text-align: center;
    position: relative;
}
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
.aboutme,.chooseGender{
    width: 80%;
    margin-left: 10%;
    margin-top: 0;
}

</style>
