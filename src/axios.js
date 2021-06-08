import axios from 'axios'

const instance = axios.create({
    baseUrl: "http://localhost:8001"
})

axios.defaults.baseURL = 'http://localhost:8001';

export default instance