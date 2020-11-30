<template>
  <v-container>
    <v-row>
      <v-col class="col-md-6 offset-md-3">
        <v-card elevation="5">
          <v-card-title class="text-lg-h4">
            Als Unternehmen registrieren
          </v-card-title>
          <v-card-subtitle class="text-md-subtitle1">
            Und noch heute die Vorteile von Kontakterfassung nutzen!
          </v-card-subtitle>
          <v-card-text>
            <v-form v-model="formValidity" @submit.prevent="register">
              <v-text-field
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                label="Passwort"
                type="password"
                v-model="passwort"
                :rules="passwortRules"
                required
              ></v-text-field>
              <v-text-field
                label="Passwort wiederholen"
                type="password"
                :rules="passwortAgainRules"
                required
              ></v-text-field>
              <v-text-field
                label="Name des Unternehmen"
                type="text"
                v-model="name"
              ></v-text-field>
              <v-text-field
                label="Telefon"
                type="tel"
                v-model="telefon"
              ></v-text-field>

              <v-spacer></v-spacer>
              <v-checkbox
                label="Allgemeinen Geschäftsbedingungen zustimmen"
                v-model="agreeToTerms"
                :rules="agreeToTermsRules"
                required
              ></v-checkbox>
              <v-spacer></v-spacer>
              <v-btn :disabled="!formValidity" type="submit" color="primary">
                Registrieren
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <p>{{ error }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      agreeToTerms: false,
      agreeToTermsRules: [
        (value) =>
          !!value ||
          'Du musst den allgemeinen Geschäftsbedingungen zustimmen, um einen Account zu erstellen',
      ],
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
      passwortRules: [
        (value) => value.length > 6 || 'Passwort Mindestlänge: 7 Zeichen',
      ],
      passwortAgainRules: [
        (value) => value == this.passwort || 'Passwort muss übereinstimmen',
      ],
      name: '',
      telefon: '',
      error: null,
      formValidity: false,
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          email: this.email,
          passwort: this.passwort,
          name: this.name,
          telefon: this.telefon,
        })
        .then(() => {
          this.$router.push('/dashboard')
        })
    },
  },
}
</script>

<style></style>
