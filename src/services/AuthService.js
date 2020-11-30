import axios from 'axios'

const url = 'https://kontaktdaten-api.azurewebsites.net/api/';
axios.defaults.headers["ApiKey"] = "7ZlKpU3mozOE0Wb";

export default {
    login(credentials) {
        return axios
            .post(url + 'login/', credentials)
            .then(response => response.data);
    },
    signUp(companyCredentials) {
        return axios
            .post(url + 'sign-up/', companyCredentials)
            .then(response => response.data);
    },
    getPlaces(companyID) {
        return axios
            .get(url + 'ort/' + companyID)
            .then(response => response.data);
    },
    getPeopleForPlace(placeID) {
        return axios
            .get(url + 'aufenthalt/' + placeID)
            .then(response => response.data);
    }
};