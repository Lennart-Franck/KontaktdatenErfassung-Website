<template>
  <v-app>
    <app-nav />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'

export default {
  components: { AppNav, AppFooter },
  name: 'App',
}
</script>
