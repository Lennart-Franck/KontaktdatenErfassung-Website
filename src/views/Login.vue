<template>
  <div>
    <v-container>
      <v-card width="500" class="mx-auto mt-10" elevation="8">
        <v-card-title class="text-lg-h4">
          Einloggen
        </v-card-title>
        <v-card-text>
          <v-form v-model="formValidity" onSubmit="return false">
            <v-text-field
              label="Email"
              prepend-icon="mdi-account-circle"
              v-model="email"
              required
              :rules="emailRules"
              type="email"
            />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Passwort"
              v-model="passwort"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              required
              :rules="passwordRules"
            />
            <v-card-actions>
              <v-btn
                color="primary"
                @click.prevent="login"
                :disabled="!formValidity"
              >
                Login
              </v-btn>
              <v-spacer></v-spacer>
              <div v-if="isLoading">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
              <div class="red--text">
                {{ error }}
              </div>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      email: '',
      emailRules: [
        (value) => !!value || 'Email ist erforderlich.',
        (value) => value.indexOf('@') !== 0 || 'Email ist nicht korrekt.',
        (value) => value.includes('@') || 'Email muss ein @ enthalten.',
        (value) =>
          value.indexOf('.', value.length - 4) - value.indexOf('@') > 1 ||
          'Die Email muss eine korrekte Domain enthalten',
        (value) =>
          value.indexOf('.', value.length - 4) <= value.length - 3 ||
          'Die Email muss eine korrekte Domain enthalten',
      ],
      passwort: '',
      passwordRules: [
        (value) => value.length > 6 || 'Passwort Mindestlänge: 7 Zeichen',
      ],
      error: null,
      formValidity: false,
      isLoading: false,
    }
  },
  methods: {
    login() {
      this.isLoading = true
      this.$store
        .dispatch('login', {
          email: this.email,
          passwort: this.passwort,
        })
        .then(() => {
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          this.isLoading = false
          this.error = err.response.data
          console.log(this.error)
        })
    },
  },
}
</script>

<style></style>
