import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from "../pages/homepage";
import signIn from "../pages/signIn";

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
        }
    ]
})
