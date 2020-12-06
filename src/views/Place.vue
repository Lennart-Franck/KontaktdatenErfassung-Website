<template>
  <div>
    <v-container>
      <v-card elevation="10" width="800" class="mt-10 mx-auto">
        <v-toolbar dark color="primary">
          <v-toolbar-title class="text-md-h5">
            {{ 'Standort: ' + place.bezeichnung }}
          </v-toolbar-title>
        </v-toolbar>
        <v-row class="py-5">
          <v-col cols="12" sm="5" offset="1">
            <div class="text-left">
              <h3>Daten:</h3>
              <v-list-item class="mt-2">
                <v-list-item-icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="text-md-subtitle-1">
                  {{ place.straße + ' ' + place.hausnummer }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-city</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle class="text-md-subtitle-1">
                  {{ place.plz + ', ' + place.stadt }}
                </v-list-item-subtitle>
              </v-list-item>

              <h3>Aktivität:</h3>
              <v-list-item class="mt-2">
                <v-list-item-subtitle class="text-md-subtitle-1">
                  {{ 'Woche: ' + visits.week + ' Personen' }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle class="text-md-subtitle-1">
                  {{ 'Monat: ' + visits.month + ' Personen' }}
                </v-list-item-subtitle>
              </v-list-item>
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" sm="4" offset-sm="1" class="text-middle">
            <div class="text-center">
              <h3>Ihr QR-Code:</h3>
              <div class="text-md-subtitle-1">
                <vrcode
                  :download="{
                    text: 'Download',
                    filename: `${place.bezeichnung}-Code.png`,
                    visible: true,
                    type: 'image/png',
                  }"
                  :value="place.ortId"
                  :options="{
                    size: 200,
                    level: 'Q',
                  }"
                ></vrcode>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

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
    axios
      .get(
        'https://kontaktdaten-api.azurewebsites.net/api/visits/' + this.placeID
      )
      .then(({ data }) => {
        this.visits = data
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  },
}
</script>

<style lang="scss" scoped></style>
