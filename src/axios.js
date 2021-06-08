import axios from 'axios'

const instance = axios.create({
    baseUrl: "https://t1t0-tinder-clone.herokuapp.com/"
})

axios.defaults.baseURL = 'https://t1t0-tinder-clone.herokuapp.com/';

export default instance