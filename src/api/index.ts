import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { Routes } from '@/router/routes.enum'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

api.interceptors.response.use(
    r => r,
    async err => {
        const isAuthRequest = err.config?.url?.includes('/login') || err.config?.url?.includes('/logout')

        if (err.response?.status === 401 && !isAuthRequest) {
            const userStore = useUserStore()
            userStore.logout()
            const router = (await import('@/router')).default
            if (router.currentRoute.value.name !== Routes.AuthPage) {
                router.push({ name: Routes.AuthPage })
            }
        }

        return Promise.reject(err)
    }
)

export default api