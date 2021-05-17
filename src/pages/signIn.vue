<template>
    <div id="signin">
        <div id="sign">

            <h3>登录</h3>
            <h4>立即开启美好生活！</h4>
            <q-input  outlined  label="请输入用户名" class="name" type="text"  v-model="UserName" />

            <q-input outlined  type="password" label="请输入密码" v-model="pwd" />


            <h5>登录表示您已同意我们的服务协议和隐私政策</h5>
            <div v-show="isShow">
                <h6>{{msg}}</h6>
            </div>
            <q-btn color="primary" class="g-button" v-on:click="confirm" label="登录"/>


            <!-- <p v-on:click="ToLogin">已有账号？马上登录</p> -->
            <p>
                <router-link to="/regist">没有账号？立即注册</router-link>
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
        name: "signin",

        data:()=>({
            UserName:"",
            pwd:"",
            com_pwd:"",
            isShow: false,
            msg:"",
            score:null
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

                this.$router.push({name:'homepage'})

            },



        }
    }
</script>


<style scoped>
    #signin{

        background: url("../assets/back/back4.jpg");

        background-size: 100% 100%;
        height: 70rem;
        position: fixed;
        width: 100%
    }

    #sign{
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
        opacity: 85%;
        height: 580px;
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
        margin-top: 3rem;
    }
    h6{
        font-size: small;
        text-align: center;
        color: red;
        margin: 0;
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
