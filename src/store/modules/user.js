const state = {
    count:999,
    nickname:"杨宇辰",
    phone:"1384389438",
    about:"yycshigedashabi哈哈哈哈哈哈",
    UID:3,
    cid:1,
    email:"yycsb@163.com",
    birthday:"20001438",
    isLogin:false,
}

//定义getters
const getters = {
    cid:state=>{
        return state.cid;
    },
    UID:state=>{
        return state.UID;
    },
    nickname:state=>{
        return state.nickname;
    },
    phone:state=>{
        return state.phone;
    },
    about:state=>{
        return state.about;
    },
    email:state=>{
        return state.email;
    },
    isLogin:state=>{
        return state.isLogin;
    },
    birthday:state=>{
        return state.birthday;
    }

}

//定义actions映射
const actions = {
    logIn({commit},readers){
        commit("login",readers);
    },
    logOut({commit}){
        commit('logout')
    }
}

//真正用于修改数据的方法
const mutations = {
    isLogin(state,userId){
      state.UID=userId;
      state.isLogin=true;
    },
    setcid(state,userId){
        state.cid=userId;
    },
    login(state,user){
        state.IsLogin=true;
        state.email=user.email;
        state.UID=user.UID;
        state.nickname=user.nickname;
        state.birthday=user.birthday;
        state.phone=user.phone;
        state.about=user.about;
    },
    logOut(state) {
        state.IsLogin=false;
        state.email="";
        state.UID="";
        state.nickname="";
        state.birthday="";
        state.phone="";
        state.about="";
    }

}

//导出所有配置
export default {
    state,
    getters,
    actions,
    mutations
};