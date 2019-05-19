import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
//import '@/assets/styles/main.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/firebase/init';
import '@/firebase/authentication';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Buefy);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
//https://vuehero.com/lessons/how-to-authenticate-users-with-vuejs-and-firebase/
