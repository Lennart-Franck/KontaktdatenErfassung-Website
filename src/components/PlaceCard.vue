<template>
  <div>
    <v-card elevation="10">
      <v-card-title class="text-md-h4">
        {{ place.bezeichnung }}
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
      <v-card-actions>
        <v-btn class="info" @click="toPlace" rounded>
          Info
        </v-btn>
      </v-card-actions>
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
