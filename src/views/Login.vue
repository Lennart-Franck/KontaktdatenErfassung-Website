<template>
    <v-card width="400" class="mx-auto mt-5" elevation="10" >
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Email"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Passwort"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary lighten-2" dark to="/sign-up">Registrieren</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark>Login</v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>

import AuthService from '../services/AuthService.js';

export default {
    data() {
        return {
            showPassword: false,
            email: '',
            password: '',
            msg: ''
        };
    },
    methods: {
        async login() {
            try {
                const credentials = {
                    email: this.email,
                    password: this.password
                };
                const response = await AuthService.login(credentials);

                this.msg = response.msg;

                const apiKey = response.apiKey;
                const user = response.user;

                this.$store.dispatch('login', {apiKey, user});

                this.$router.push('/');
            } catch (error) {
                this.msg = error.respone.data.msg;
            }
        }
    }
}
</script>

<style>

</style>