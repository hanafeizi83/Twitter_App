import axios from 'axios'
const BASE_URL = 'https://twitter-app-8nzt.onrender.com';

const app = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export default http