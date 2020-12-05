<template>
  <v-container>
    <v-row class="mx-auto my-8">
      <v-col cols="12" sm="6">
        <p class="text-md-h2 mt-md-10 text-h5">
          Willkommen zu Erfasst!
        </p>
        <p class="text-md-subtitle-1">
          Digitale Kontaktdatenerfassung leicht gemacht - Innerhalb von Sekunden
          haben Sie sich verifiziert. Schnell. Unkompliziert. Sicher. Ohne
          Zettel.
        </p>
        <v-row>
          <v-col cols="5">
            <v-img src="../assets/appStore.svg"></v-img>
          </v-col>
          <v-col cols="5" offset="1">
            <v-img src="../assets/googlePlay.svg"></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8" offset="2" sm="5" offset-sm="1">
        <v-img src="../assets/startLogo.png"></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-15">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="primary--text text-md-h4">
            Vorteile für Gäste
          </v-card-title>
          <v-card-text class="text-md-body-1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="primary--text text-md-h4">
            Vorteile für Unternehmen
          </v-card-title>
          <v-card-text class="text-md-body-1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row class="mt-15">
      <v-col offset="2" cols="4">
        <div class="primary--text text-md-subtitle-1">
          DIE EINZIG WICHTIGE APP
        </div>
        <div class="text-md-body-2">
          Durch Scan eines QR-Codes werden Ihre Kontaktinformationen übermittelt
          und können schnell und sicher an das Gesundheitsamt übermittelt
        </div>
      </v-col>
      <v-col cols="4">
        <p>GEWINNER "BESTE NEUE APP 2021"</p>
        <p>
          Ausgezeichnet durch die Hochschule Flensburg 2021 für besonders
          innovative Ideen.
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col>
        <p>HERAUSRAGENDES DESIGN</p>
        <p>
          Das simple Design orientiert sich an maximaler Benutzerfreundlichkeit,
          was die Bedienung zum Kinderspiel macht.
        </p>
      </v-col>
      <v-col>
        <p>Kinderleichte Bedienung</p>
        <p>Die Bedienung der App ist intuitiv ohne Vorkenntnisse möglich.</p>
      </v-col>
    </v-row> -->
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
