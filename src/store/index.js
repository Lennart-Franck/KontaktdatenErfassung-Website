import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const url = 'https://kontaktdaten-api.azurewebsites.net/api/';

export default new Vuex.Store({
  state: {
    user: null,
    places: []
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA(state) {
      localStorage.removeItem('user')
      state.user = null
      axios.defaults.headers.common['Authorization'] = null
    },
    SET_PLACES(state, placeData) {
      state.places = placeData
    }
  },
  actions: {
    register({commit}, credentials) {
      return axios
      .post(url + 'sign-up', credentials)
      .then(
        ({data}) => {
          commit('SET_USER_DATA', data)
        }
      )
    },
    login ({commit}, credentials) {
      return axios
      .post(url + 'login', credentials)
      .then (
        ({data}) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({commit }) {
      commit('CLEAR_USER_DATA')
    },
    getPlaces({commit}) {
      return axios
      .get(
        'https://kontaktdaten-api.azurewebsites.net/api/places/' +
          this.state.user.userDetails.unternehmenID)
      .then (({data}) => {
        commit('SET_PLACES', data)
      })
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})
