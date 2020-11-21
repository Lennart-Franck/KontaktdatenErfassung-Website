<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Kontakt Erfassung
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text 
          rounded 
          :to="link.url"
          class="hidden-sm-and-down"
        >
          {{link.label}}
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
    absolute

    temporary
    >
      <v-list nav dense>
        <v-list-item-group active-class="deep-blue--text text--accent-4">
          <v-list-item
          v-for="link in links"
          :key="`${link.label}-header-link`"
          :to="link.url"
          >
            <v-list-item-title>{{link.label}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
    </v-navigation-drawer>


    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
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
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Kontakt Erfassung</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data() {
    return {
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Login',
          url: '/login'
        },
        {
          label: 'Registrieren',
          url: '/sign-up'
        }
      ],
      linksFooter: [
        {
          label: 'Impressum',
          url: '/'
        },
        {
          label: 'Datenschutz',
          url: '/'
        },
        {
          label: 'Infos',
          url: '/'
        }
      ],
      drawer: false
    }
  }
};
</script>
