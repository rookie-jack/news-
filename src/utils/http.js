import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://157.122.54.189:9083'
})