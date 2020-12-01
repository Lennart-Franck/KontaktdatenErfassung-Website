<template>
  <div>
    <v-app-bar app color="primary" dark height="70">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        src="../assets/logo_white_large.png"
        max-width="200"
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
        <v-btn
          v-for="link in authLinks"
          :key="`${link.label}-header-link`"
          text
          rounded
          :to="link.url"
          class="hidden-sm-and-down"
        >
          {{ link.label }}
        </v-btn>
        <v-btn text rounde @click="logout" class="hidden-sm-and-down">
          Ausloggen
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-blue--text text--accent-4">
          <div v-if="!loggedIn">
            <v-list-item
              v-for="link in links"
              :key="`${link.label}-header-link`"
              :to="link.url"
            >
              <v-list-item-title>{{ link.label }}</v-list-item-title>
            </v-list-item>
          </div>
          <div v-else>
            <v-list-item
              v-for="link in authLinks"
              :key="`${link.label}-header-link`"
              :to="link.url"
            >
              <v-list-item-title>{{ link.label }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Ausloggen</v-list-item-title>
            </v-list-item>
          </div>
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
      authLinks: [
        {
          label: 'Dashboard',
          url: '/dashboard',
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
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
