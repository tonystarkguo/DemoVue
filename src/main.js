// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//import AMap from 'AMap';
//import AMapUI from 'AMapUI';
Vue.use(Mint)
Vue.use(VueResource)

Vue.config.productionTip = false

const UserInfo={"info":"name","company":""};

/* eslint-disable no-new */
 new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
