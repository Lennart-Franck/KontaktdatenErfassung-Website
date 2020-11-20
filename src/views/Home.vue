<template>
  <div>
    <h1>Hi {{email}}</h1>
    <input type="button" value="Logout" @click="logout"/>
  </div>
</template>

<script>
import AuthService from '../services/AuthService.js';

export default {
  data() {
    return {
      email: '',
      orte: []
    };
  },
  async created() {
    if(!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }

    this.email = this.$store.getters.getUser.username;
    this.orte = await AuthService.getPlaces(this.$store.getters.getUser.Id)
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
}
</script>
