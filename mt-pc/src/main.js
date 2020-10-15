import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui';
import Router from './router.js';
import Stroe from './store.js';

Vue.use(Element);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Router,
  store:Stroe,
}).$mount('#app')
