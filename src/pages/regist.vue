<template>
    <div id="regist">
        <div id="register">

            <h3>注册</h3>
            <h4>注册开启新世界！</h4>
            <q-input  outlined  label="请输入用户名" class="name" type="text"  v-model="UserName" />

            <q-input outlined v-on:click="strength"  type="password" label="请输入密码" v-model="pwd" />
            <div>
                <h7 v-show="strong">密码强度</h7>
                <password-meter class="strength" :password="pwd" @score="onScore" />
            </div>

            <q-input outlined  type="password" label="请再次输入密码" v-model="com_pwd" />
            <h5>注册即表示您已同意我们的服务协议和隐私政策</h5>
            <div v-show="isShow">
                <h6>{{msg}}</h6>
            </div>
            <q-btn color="primary" class="g-button" v-on:click="confirm" label="注册"/>


            <!-- <p v-on:click="ToLogin">已有账号？马上登录</p> -->
            <p>
                <router-link to="/signIn">已有账号？马上登录</router-link>
            </p>
            <br />
            <!-- <router-link to="/">返回</router-link> -->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import passwordMeter from "vue-simple-password-meter";

    Vue.use(VueAxios, axios)

export default {
    name: "regist",
    components: { passwordMeter },
    data:()=>({
        UserName:"",
        pwd:"",
        com_pwd:"",
        isShow: false,
        msg:"",
        score:null,
        strong:false
    }),
    methods:{
        checkLogin:function(){
            axios.get('/usr',{
                params:{
                    id:this.id,
                    pwd:this.pwd,
                }
            }).then(function (response){

            })
        },
        confirm(){
            if(this.UserName == ""){
            this.isShow=true;
            this.msg="用户名不能为空";
            return false;
        }
            else if(this.pwd == ""){
                this.isShow=true;
                this.msg="密码不能为空";
                return false;

            }
            else if(this.com_pwd == ""){
                this.isShow=true;
                this.msg="再次确认密码不能为空";
                return false;

            }

            else if(this.pwd != this.com_pwd){
                this.isShow=true;
                this.msg="两次输入密码不相同";
                return false;
            }
            var numasc = 0;
            var charasc = 0;
            var otherasc = 0;
            if(0==this.pwd.length){
                this.msg= "密码不能为空";
            }else if(this.pwd.length<8||this.pwd.length>18){
                this.isShow=true;
                this.msg= "密码应为6-20位，由大小写字母、特殊字符及数字中的两种以上组成";
                return false;
            }else{
                for (var i = 0; i < this.pwd.length; i++) {
                    var asciiNumber = this.pwd.substr(i, 1).charCodeAt();
                    if (asciiNumber >= 48 && asciiNumber <= 57) {
                        numasc += 1;
                    }
                    if ((asciiNumber >= 65 && asciiNumber <= 90)||(asciiNumber >= 97 && asciiNumber <= 122)) {
                        charasc += 1;
                    }
                }
                if(0==numasc)  {
                    this.isShow=true;
                    this.msg="密码必须含有数字"
                    return false;
                }else if(0==charasc){
                    this.isShow=true;
                    this.msg="密码必须含有字母";
                    return false;
                }
            }


                this.$router.push({name:'homepage'})

        },
        strength:function(){

                this.strong=true;

        },

        onScore({ score, strength }) {
            console.log(score); // from 0 to 4
            console.log(strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure'
            this.score = score;
        }

    }
}
</script>


<style scoped>
    #regist{

        background: url("../assets/back/back3.jpg");

        background-size: 100% 100%;
        height: 70rem;
        position: fixed;
        width: 100%
    }

    #register{
        background: white;
        width: 500px;
        border: #C10015;
        border-color: #C10015;
        border-width: 100px;
        text-align: center;
        left: 50%;
        top:50%;
        margin: auto;
        margin-top: 100px;
        border-radius:8px 8px 8px 8px;
        opacity: 70%;
        height: 630px;
    }
    .q-input{
        width: 320px;
        margin: auto;
    }
    .name{
        margin:auto;
        margin-bottom: 30px;
        width: 320px;

    }
    .g-button{

        width: 280px;
        height: 50px;
        line-height: 40px;
        margin: 0 auto;
        border: none;
        background-color: #027BE3;
        color: #fff;
        margin-bottom: 10px;
        border-radius:8px 8px 8px 8px;
        font-size: 180%;
        display: flex;
        justify-content: center;
    }
    h3 {
        text-align: center;
        font-size: 180%;
        white-space: pre-wrap;
        padding-top: 50px;
        color: black;
        margin-bottom: 0;

    }
    h4{
        font-size: 100%;
        text-align: center;
        color: black;
        margin-top: 0;
    }
    h5{
        font-size: 100%;
        text-align: center;
        color: black;
        margin-top: 2rem;
    }
    h6{
        font-size: small;
        text-align: center;
        color: red;
        margin: 0;
    }
    h7{
        font-size: smaller;
        margin-left: 10px;
        text-align: center;
        color: grey;
    }
    span {
        text-align: center;
    }
    input {
        display: block;
        width: 320px;
        height: 50px;
        line-height: 40px;
        margin: 0 auto;
        margin-top: 20px;
        outline: none;
        border: 1px solid #888;
        padding: 10px;
        box-sizing: border-box;
        border-radius:3px 3px 3px 3px;
        border-color: gray;
    }

    p {
        color: black;
        text-align: center;
        font-size: medium;

    }
    a{
        text-decoration: none;
        text-decoration-color: #0099E5;
        color: #027BE3;
    }
    button {
        display: block;
        width: 280px;
        height: 50px;
        line-height: 40px;
        margin: 0 auto;
        border: none;
        background-color: #027BE3;
        color: #fff;
        font-size: 16px;
        margin-bottom: 10px;
        border-radius:8px 8px 8px 8px;
        font-size: large;
    }

    span {
        cursor: pointer;
    }

    span:hover {
        color: #41b883;
    }
    .strength{
        margin:auto;
        width: 320px;
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }


</style>
