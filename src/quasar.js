import Vue from 'vue'
import VueRouter from 'vue-router'
import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'

Vue.use(VueRouter)
Vue.use(Quasar, {
  config: {},
  plugins: {
  }
 })