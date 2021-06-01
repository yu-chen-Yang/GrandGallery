<template>
    <div>
        <div id="personalpage">
            <hometitle class="hometitle"/>

            <div class="portrial">
                <q-avatar size="180px" class="myportrial" >
                    <img src="../assets/cursorPineapple.png">
                </q-avatar>
                <h1>yyc</h1>
                <h2>{{position}}  |  关注 {{follows}}| 粉丝 {{followers}}</h2>
            </div>

        </div>
      <q-btn @click="jump" color="secondary" label="test"/>
    </div>
</template>

<script>

    import Hometitle from "../components/homepage/card/hometitle";

    export default {
        name: "personalpage",
        components: {
            Hometitle,
        },

        data () {
            return{
                userid:-1,
                isLogin:true,
                username:"yyc",
                userTitle:"",
                level:0,
                position:"上海",
                followers:"9999",
                follows:"25"
            }
        },
        methods:{
            tofollow:function () {
                this.$router.push({name:'information'})

            },
          jump:function (){
              this.$router.push({name:"mainPage"})
          }
        },
        watch:{
            app: function(){
                return{
                    height:document.documentElement.clientHeight,
                    width:document.documentElement.clientWidth,
                }
            }
        }
    }

</script>

<style scoped>
    #personalpage{

        background: url("../assets/back/back4.jpg");

        background-size: 100% 100%;
        height: 50rem;
        position: relative;
        width: 100%
    }
    .hometitle{
        padding-top: 20px;
    }
    .portrial{
      margin-top: -10rem;
        margin-left:auto;
        margin-right: auto;
        size:100px;
        text-align: center;
    }
    .myportrial{
        background: white;
    }
    h1{
        margin-top: 0px;
        color: white;
        font-weight: bold;
        font-size: 60px;
        margin-bottom: 0;
    }
    h2{
        color: white;
        font-size: 20px;
        margin-top: 0;
    }
    .preview{
        margin-top: 0;
    }
    .g-button{
        margin-left: 80%;
    }

</style>
