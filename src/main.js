import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store' //после обьявления его надо подключить
/*components: {
  counterButton
},*/
Vue.config.productionTip = false

new Vue({
  router,
  
  store,        //и добавить тут после подключения
  render: h => h(App)
}).$mount('#app')
