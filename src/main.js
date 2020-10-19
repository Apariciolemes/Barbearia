import Vue from 'vue'
import '@/assets/plugins/primevue/index.js';
import router from '@/routes.js'
import store from './store/store.js'
import App from './App.vue'
import '@/assets/plugins/fontawesome/index.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
