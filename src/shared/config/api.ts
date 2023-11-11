import axios from "axios"

export const api = axios.create({
    baseURL: "https://stoplight.io/mocks/kode-education/kode-bank/27774161/",
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 123'
    }
})