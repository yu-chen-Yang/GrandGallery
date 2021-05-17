import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from "../pages/homepage";
import signIn from "../pages/signIn";
import regist from "../pages/regist";
import mainPage from "../pages/mainPage";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:"/",
            component: homepage,
            name:"homepage"
        },
        {
            path:"/signIn",
            component:signIn,
            name:"signIn"
        },
        {
            path: "/regist",
            component:regist,
            name: "regist"
        }

    ]
})
