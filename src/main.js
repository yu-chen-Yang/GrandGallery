import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './quasar'
import router from "./router/index.js";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


