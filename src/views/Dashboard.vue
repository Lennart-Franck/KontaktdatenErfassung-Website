<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>Dashboard</h1>
          <h4>Hier können Sie alle Ihre Orte verwalten</h4>
        </v-col>
        <v-col>
          <v-btn class="info">
            Ort hinzufügen
          </v-btn>
        </v-col>
      </v-row>
      <template v-if="!isLoading">
        <v-container fluid>
          <v-row>
            <v-col v-for="place in places" :key="place.ortId" class="col-md-3">
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
import axios from 'axios'
import PlaceCard from '../components/PlaceCard'

export default {
  components: { PlaceCard },
  data() {
    return {
      isLoading: true,
      places: [],
    }
  },
  created() {
    axios
      .get(
        'https://kontaktdaten-api.azurewebsites.net/api/places/' +
          this.$store.state.user.userDetails.unternehmenID
      )
      .then(({ data }) => {
        this.places = data
        this.isLoading = false
      })
  },
}
</script>

<style lang="scss" scoped></style>
