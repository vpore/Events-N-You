import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const signin = (formData) => API.post('/principal/signin', formData)

    .then(function (response) {
        
        localStorage.setItem("profile", JSON.stringify(response.data.token))
        localStorage.setItem("role", JSON.stringify(response.data.existingUser.username))
        console.log(response.data.existingUser.username);
    })
    .catch(function (error) {
        console.log(error);
    })

export const submitreq = (reqData) => API.post('/committee/request', reqData)
    .then(function (response) {
        console.log(response.data)
        console.log('hi')
    })
    .catch(function (error) {
        alert(error.response.data.message)
    })

export const getreq = () => API.get('/committee')
.then(function (response) {
        console.log(response.data)

        return response.data;
})
.catch(function (error) {
    console.log(error);
})