<template>
  <div>
    <v-card elevation="8" class="pa-1" @click="toPlace">
      <v-card-title class="text-md-h5">
        <p>
          {{ place.bezeichnung }}
        </p>
      </v-card-title>
      <v-list-item>
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
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PlaceCard',
  props: {
    place: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    toPlace() {
      this.$router.push({ path: `place/${this.place.ortId}` })
    },
  },
}
</script>

<style lang="scss" scoped></style>
