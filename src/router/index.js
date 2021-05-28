import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from "../pages/homepage";
import signIn from "../pages/signIn";
import regist from "../pages/regist";
import mainPage from "../pages/mainPage";
import Personalpage from "../pages/Personalpage";
import testpage from "../pages/testpage";
import hometitle from "../components/homepage/card/hometitle";
import information from "../pages/information";
import test from "../pages/test";

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
        },
        {
            path:"/Personalpage",
            component: Personalpage,
            name:"Personalpage"
        },
        {
            path: "/testpage",
            component: testpage,
            name: "testpage"
        },
        {
            path:"/hometitle",
            component: hometitle,
            name: "hometitle"
        },
        {
            path: "/information",
            component: information,
            name: "information"
        },
        {
            path: "/test",
            component: test,
            name: "test"
        }

    ]
})
