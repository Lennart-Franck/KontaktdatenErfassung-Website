import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import vuetify from './plugins/vuetify';
import VModal from 'vue-js-modal'
import vrcode from '@ispa.io/vrcode'

Vue.config.productionTip = false

Vue.use(VModal)
Vue.component('vrcode', vrcode)

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if(error.response.status === 401) {
          this.$store.dispatch('logout')
          this.$router.push("/")
        }
        return Promise.reject(error)
      }
    )
  },
  vuetify,
  VModal,
  render: h => h(App)
}).$mount('#app')
