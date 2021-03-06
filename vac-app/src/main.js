// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


import VueApexCharts from 'vue-apexcharts'

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

Vue.component('apexchart', VueApexCharts);
Vue.use(Vuetify, {
  iconfont: 'fa'
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
