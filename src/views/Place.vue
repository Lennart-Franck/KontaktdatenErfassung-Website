<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3" offset="3">
          <v-card tile flat>
            <v-card-title>Standort: {{ place.bezeichnung }}</v-card-title>
            <v-card-text>
              <h4>Straße: {{ place.straße + ' ' + place.hausnummer }}</h4>
              <h4>Stadt: {{ place.plz + ', ' + place.stadt }}</h4>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeID: this.$route.params.id,
      place: [],
      visits: [],
    }
  },
  created() {
    this.place = this.$store.getters.getPlaceByID(this.placeID)
  },
}
</script>

<style lang="scss" scoped></style>
