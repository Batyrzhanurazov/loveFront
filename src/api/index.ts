import axios from 'axios'
import {useUserStore} from "@/stores/user.ts";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(config => {
    const token = useUserStore().token
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

export default api