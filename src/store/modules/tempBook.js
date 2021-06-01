const state = {
    isbn:""
}

//定义getters
const getters = {
    isbn:state=>{
        return state.isbn;
    },
}

//定义actions映射
const actions = {

}

//真正用于修改数据的方法
const mutations = {
    setBook:function (state,ISBN){
        state.isbn=ISBN;
    },
    clearBook:function (state){
        state.isbn="";
    }
}

//导出所有配置
export default {
    state,
    getters,
    actions,
    mutations
};