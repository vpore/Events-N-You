import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const signin = (formData) => API.post('/principal/signin', formData)
    .then(function (response) {
        console.log(response);
        localStorage.setItem("profile", JSON.stringify(response.data.token))
    })
    .catch(function (error) {
        console.log(error);
    })