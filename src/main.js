import Vue from 'vue'
import App from './App.vue'
//import counterButton from '@/components/counterButton.vue'
import router from './router'
//import store from './store'
/*components: {
  counterButton
},*/
Vue.config.productionTip = false

new Vue({
  router,
  
  //store,
  render: h => h(App)
}).$mount('#app')
