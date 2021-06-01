import Vue from 'vue';
import Vuex from 'vuex';
import user from "./modules/user";
import createPersistedState from 'vuex-persistedstate'
import tempBook from "./modules/tempBook";
//import {ionMdPie} from "@quasar/extras/ionicons-v4";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        user,
        tempBook
    },
    plugins: [createPersistedState({
        storage:window.sessionStorage
    })]
});
