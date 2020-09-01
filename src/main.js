import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Video from 'video.js'
import 'video.js/dist/video-js.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFolderPlus, faFolderMinus } from '@fortawesome/free-solid-svg-icons'
Vue.prototype.$video = Video

library.add(faFolderPlus, faFolderMinus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
