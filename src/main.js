import Vue from 'vue';

import '@/assets/styles/main.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/firebase/init';
import '@/firebase/authentication';
import './registerServiceWorker';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
