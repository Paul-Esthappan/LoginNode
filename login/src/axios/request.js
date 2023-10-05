import axios from "axios";

const BaseURL = 'http://localhost:5001/api/log/'
const updateURL = 'http://localhost:5001/api/updates/'

var Token = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).userdata && JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).userdata.accessToken 

console.log("token ", Token);

export const publicRequest = axios.create({
    baseURL : BaseURL,
})

export const userRequest = axios.create({
    baseURL : updateURL,
    headers : {token : `Bearer ${Token}`}
})