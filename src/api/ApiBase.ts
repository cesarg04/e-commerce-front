import axios from 'axios'


export const url_path = import.meta.env.VITE_URL_PATH;
const token: string = localStorage.getItem('token') || ''

export const ApiBase = axios.create({
    baseURL: url_path,
    headers: {
        'x-token': token 
    }
}) 