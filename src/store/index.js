import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    apiKey : '',
    user: {}
  };
};



export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn : state => {
      return state.apiKey;
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    SET_KEY: (state, apiKey) => {
      state.apiKey = apiKey;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: state => {
      Object.assign(state,getDefaultState());
    }
  },
  actions: {
    login: ({commit }, {apiKey, user}) => {
      commit('SET_KEY', apiKey);
      commit('SET_USER', user);

      Axios.defaults.headers.common['ApiKey'] = apiKey;
    },
    logout: ({commit}) => {
      commit('RESET', '');
    }
  },
  modules: {
  }
})
