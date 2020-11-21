<template>
    <v-container>
        <v-row>
            <v-col class="col-md-6 offset-md-3">
                <h1>Als Unternehmen registrieren</h1>
                <h4>Und noch heute die Vorteile von Kontakterfassung nutzen!</h4>
                <v-form v-model="formValidity">
                    <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
                    <v-text-field label="Passwort" type="password"></v-text-field>
                    <v-text-field label="Name des Unternehmen" type="text"></v-text-field>
                    <v-text-field label="Telefon" type="tel"></v-text-field>

                    <v-spacer></v-spacer>
                    <v-checkbox label="Allgemeinen Geschäftsbedingungen zustimmen" v-model="agreeToTerms" :rules="agreeToTermsRules" required></v-checkbox>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" :disabled="!formValidity" @click="validateForm" color="primary">Registrieren</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AuthService from '../services/AuthService.js';

export default {
    data() {
        return {
            agreeToTerms: false,
            agreeToTermsRules: [
                value => !!value || 'Du musst den allgemeinen Geschäftsbedingungen zustimmen, um einen Account zu erstellen'
            ],
            email: '',
            emailRules: [
                value => !!value || 'Email ist erforderlich.',
                value => value.indexOf('@') !== 0 || 'Email ist nicht korrekt.',
                value => value.includes('@') || 'Email muss ein @ enthalten.',
                value => value.indexOf('.', value.length-4) - value.indexOf('@') > 1 || 'Die Email muss eine korrekte Domain enthalten',
                value => value.indexOf('.', value.length-4) <= value.length -3 || 'Die Email muss eine korrekte Domain enthalten'
            ],
            password: '',
            password_repeat: '',
            name: '',
            telefon: '',
            msg: '',
            formValidity: false
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