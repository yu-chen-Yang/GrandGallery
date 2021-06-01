import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './quasar'
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios=axios
import router from "./router/index";
import {store} from "./store/index"
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


