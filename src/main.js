import Vue from 'vue'
import App from './App.vue'
import store from './store';
import axios from 'axios';
import router from './router'


Vue.config.productionTip = false

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vuejs-http-7c612/databases/(default)/documents'
axios.interceptors.request.use(config => {
  console.log('インターセプトリクエスト',config)
  return config
},
error => {
  return Promise.reject(error)
});
axios.interceptors.response.use(res => {
  console.log('インターセプトレスポンス',res)
  return res
},
error => {
  return Promise.reject(error)
});



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
