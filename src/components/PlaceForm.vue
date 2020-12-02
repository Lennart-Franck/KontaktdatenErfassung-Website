<template>
  <modal
    name="place-form"
    transition="pop-out"
    :width="modalWidth"
    :height="500"
    :adaptive="true"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>
          Ort hinzufügen
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form v-model="formValidity" onSubmit="return false">
          <v-text-field
            label="Bezeichnung"
            type="text"
            v-model="bezeichnung"
            required
          ></v-text-field>
          <v-text-field
            label="Straße"
            type="text"
            v-model="straße"
            :rules="straßeRules"
            required
          ></v-text-field>
          <v-text-field
            label="Hausnummer"
            type="text"
            :rules="hausnummerRules"
            v-model="hausnummer"
            required
          ></v-text-field>
          <v-text-field
            label="Postleitzahl"
            type="number"
            v-model="plz"
            :rules="plzRules"
            :counter="5"
          ></v-text-field>
          <v-text-field
            label="Stadt"
            type="text"
            v-model="stadt"
            :rules="stadtRules"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              :disabled="!formValidity"
              type="submit"
              color="primary"
              @click.prevent="createPlace"
            >
              Ort hinzufügen
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="red" @click="modal.hide(this)" dark>
              Abbrechen
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </modal>
</template>

<script>
const MODAL_WIDTH = 656
import axios from 'axios'

export default {
  name: 'PlaceForm',
  data() {
    return {
      bezeichnung: '',
      straße: '',
      straßeRules: [],
      hausnummer: '',
      hausnummerRules: [],
      plz: 0,
      plzRules: [
        (value) => value.lenght == 5 || 'Plz muss 5 Zahlen enthalten',
        (value) =>
          value.contains(['A-Z']) || 'Plz darf nur aus Zahlen bestehen',
      ],
      stadt: '',
      stadtRules: [],
      modalWidth: MODAL_WIDTH,
      formValidity: false,
    }
  },
  props: ['places'],
  methods: {
    createPlace() {
      const Place = {
        unternehmenID: parseInt(
          this.$store.state.user.userDetails.unternehmenID
        ),
        bezeichnung: this.bezeichnung,
        straße: this.straße,
        hausnummer: this.hausnummer,
        plz: parseInt(this.plz),
        stadt: this.stadt,
      }
      axios
        .post('https://kontaktdaten-api.azurewebsites.net/api/places', Place)
        .then(({ data }) => {
          this.$modal.hide('place-form')
          this.$store.dispatch('getPlaces').then(() => {
            this.$router.push({ path: `place/${data.ortId}` })
          })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
  },
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
}
</script>

<style lang="scss" scoped></style>
