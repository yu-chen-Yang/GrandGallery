import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import createVuexAlong from 'vuex-along'

export default new Vuex.Store({
    state:{
        count:999,
        nickname:"yyc",
        phone:"1384389438",
        about:"yycshigedashabi哈哈哈哈哈哈",
        UID:"0001",
        email:"yycsb@163.com",
        birthday:"20001438",
        IsLogin:false
    },
    mutations:{
        increment: state => state.count ++,
        decrement:state => state.count --,
        setPhone(state,a){
            state.phone = a
        },
        setEmail(state,a){
            state.email = a
        },
        setNickname(state,a){
            state.nickname = a
        },
        setBirthday(state,a){
            state.birthday = a
        },
        setAbout(state,a){
            state.about = a
        },
        setIsLogin(state,a){
            state.IsLogin = true;
        },
        setNotLogin(state,a){
            state.IsLogin = false;
        }
    },
    getters:{

    },
    actions:{

    },
    modules:{

    },
    plugins:[createVuexAlong()]
})
