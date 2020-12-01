<template>
  <modal
    name="place-form"
    transition="pop-out"
    :width="modalWidth"
    :height="500"
    :adaptive="true"
  >
    <v-container class="md-">
      <div class="text-h4">Ort erstellen</div>
      <div class="text-md-subheader-1">
        Formular ausfüllen und ihrem Unternehmen einen Ort hinzufügen
      </div>
      <v-form v-model="formValidity" @submit.prevent="createPlace">
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
          required
        ></v-text-field>
        <v-text-field
          label="Postleitzahl"
          type="number"
          v-model="plz"
          :rules="plzRules"
        ></v-text-field>
        <v-text-field
          label="Stadt"
          type="text"
          v-model="stadt"
          :rules="stadtRules"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn :disabled="!formValidity" type="submit" color="primary">
          Ort hinzufügen
        </v-btn>
      </v-form>
    </v-container>
  </modal>
</template>

<script>
const MODAL_WIDTH = 656

export default {
  name: 'PlaceForm',
  data() {
    return {
      bezeichnung: '',
      straße: '',
      straßeRules: [],
      hausnummer: '',
      hausnummerRules: [],
      plz: '',
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
  methods: {
    createPlace() {},
  },
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
}
</script>

<style lang="scss" scoped></style>
