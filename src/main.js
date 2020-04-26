import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import Vuelidate from 'vuelidate'

Vue.use(Ionic);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(Vuelidate)

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-center',
  defaultType: 'info',
  defaultTimeout: 4000
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
