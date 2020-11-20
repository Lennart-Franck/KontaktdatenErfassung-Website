<template>
  <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Email" v-model="email">
      <input type="text" placeholder="Passwort" v-model="password">
      <input type="text" placeholder="Passwort Wiederholen" v-model="password_repeat">
      <input type="text" placeholder="Name" v-model="name">
      <input type="text" placeholder="Telefon" v-model="telefon">
      <input type="button" @click="signUp" value="Sign Up">
      <p> <v-if="msg">{{msg}} </p>
  </div>
</template>

<script>
import AuthService from '../services/AuthService.js';

export default {
    data() {
        return {
            email: '',
            password: '',
            password_repeat: '',
            name: '',
            telefon: '',
            msg: ''
        };
    },
    methods: {
        async SignUp() {
            try {
                const credentials  = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    telefon: this.telefon
                };
                const response = await AuthService.signUp(credentials);
                this.msg = response.msg;
            } catch(error) {
                this.msg = error.response.data.msg;
            }
        }
    }
}
</script>

<style>

</style>