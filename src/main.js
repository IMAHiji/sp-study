import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@/assets/styles/main.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/firebase/init';
import '@/firebase/authentication';
import './registerServiceWorker';

Vue.use(Buefy);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
