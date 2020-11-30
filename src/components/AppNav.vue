<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        src="../assets/logo_white_large.png"
        max-width="180"
        contain
        dark
      ></v-img>
      <v-spacer></v-spacer>

      <div v-if="!loggedIn">
        <v-btn
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          rounded
          :to="link.url"
          class="hidden-sm-and-down"
        >
          {{ link.label }}
        </v-btn>
      </div>
      <div v-else>
        <v-btn text rounded @click="logout">
          Ausloggen
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-blue--text text--accent-4">
          <v-list-item
            v-for="link in links"
            :key="`${link.label}-header-link`"
            :to="link.url"
          >
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { authComputed } from '../store/helpers.js'

export default {
  data() {
    return {
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Login',
          url: '/login',
        },
        {
          label: 'Registrieren',
          url: '/sign-up',
        },
      ],
      drawer: false,
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style lang="scss" scoped></style>
