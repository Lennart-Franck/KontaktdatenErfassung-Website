<template>
  <div>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in linksFooter"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-1"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Kontakt Erfassung</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linksFooter: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Impressum',
          url: '/',
        },
        {
          label: 'Datenschutz',
          url: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
