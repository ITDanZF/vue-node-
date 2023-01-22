import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import env from './env.js'

Vue.use(vueAxios, axios)
Vue.config.productionTip = false

//根据前端跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

// 错误接口拦截
axios.interceptors.response.use(function(response) {
    let res = response.data
    if (res.status == 0) {
      return res.data;//状态码成功
    }else if(res.status == 10) {
      window.location.href = '/#/login'//状态码失败
    } else {
      alert(res.msg)
    }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')















