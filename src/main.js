import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局样式
import './assets/css/global.css'
// elementui全局引入
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element'
// 字体图标
import './assets/font/iconfont.css'
// 粒子特效
import VueParticles from 'vue-particles'
// import './assets/fonts/materialdesignicons.eot'
// import './assets/fonts/materialdesignicons.svg'
// import './assets/fonts/materialdesignicons.ttf'
// import './assets/fonts/materialdesignicons.woff'
// import './assets/fonts/materialdesignicons.woff2'

Vue.use(VueParticles)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:3000/blog/api'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
