<template>
  <div>
    <PlaceForm :places="places" />
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1>Standorte</h1>
          <h4>Hier können Sie alle Ihre Standorte verwalten</h4>
        </v-col>
        <v-col offset-md="4" class="mt-7" cols="2">
          <v-btn color="blue" dark @click="$modal.show('place-form')">
            Ort hinzufügen
            <v-icon class="ml-2">mdi-plus-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <template v-if="!isLoading">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="place in places"
              :key="place.ortId"
              cols="12"
              md="6"
              sm="6"
              lg="4"
              xl="3"
            >
              <PlaceCard :place="place" />
            </v-col>
          </v-row>
        </v-container>
      </template>
      <p v-else>
        Lade Orte
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </p>
    </v-container>
  </div>
</template>

<script>
import PlaceCard from '../components/PlaceCard'
import PlaceForm from '../components/PlaceForm'

export default {
  components: { PlaceCard, PlaceForm },
  data() {
    return {
      isLoading: true,
      places: [],
    }
  },
  created() {
    this.$store.dispatch('getPlaces').then(() => {
      this.isLoading = false
      this.places = this.$store.state.places
    })
  },
  methods: {
    showModal() {
      this.$modal.show('PlaceForm')
    },
  },
}
</script>

<style lang="scss" scoped></style>
