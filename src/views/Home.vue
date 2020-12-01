<template>
  <v-container>
    <v-row class="mx-auto my-auto">
      <v-col cols="3">
        <v-card>
          <v-card-title>Für Gäste</v-card-title>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="3">
        <v-card>
          <v-card-title>Für Unternehmen</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import AuthService from '../services/AuthService.js';

export default {
  data() {
    return {
      email: '',
      orte: [],
    }
  },
  /*
  async created() {
    if(!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }

    this.email = this.$store.getters.getUser.username;
    this.orte = await AuthService.getPlaces(this.$store.getters.getUser.Id)
  },
  */
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  },
}
</script>
