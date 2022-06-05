import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://10.100.69.219:8301/'

new Vue({
  render: h => h(App)
}).$mount('#app')
