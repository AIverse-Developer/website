import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import i18n from './addon/i18n/i18n.js'

import { api } from './request/index'

import store from './store/store'
import { Confirm, LoadingPlugin, ToastPlugin } from 'vux'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(Vuex)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ElementUI)
Vue.component('confirm', Confirm)
Vue.config.productionTip = false

// i18n
Vue.prototype._i18n = i18n
Vue.prototype.$api = api
Vue.prototype.$eventHub = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',
  store
})
