import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Axios.defaults.headers.common['ApiKey'] = store.state.apiKey;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
