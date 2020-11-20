<template>
  <div>
      <h1>Login</h1>
      <input type="text" placeholder="Email" v-model="username">
      <input type="text" placeholder="Password" v-model="password">
      <input type="button" @click="login" value="Login">
      <p v-if="msg">{{msg}} </p>
  </div>
</template>
<script>

import AuthService from '../services/AuthService.js';

export default {
    data() {
        return {
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