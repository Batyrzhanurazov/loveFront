import { defineStore } from 'pinia'
import api from '@/api'

export const useUserStore = defineStore('user', {
    state: () => ({
        userLogin: '',
        role: '',
        token: '',
        initialized: false
    }),

    actions: {
        async init() {
            if (this.initialized) return
            const saved = sessionStorage.getItem('token')
            if (saved) {
                this.token = saved
                await this.fetchMe()
            }
            this.initialized = true
        },

        async fetchMe() {
            try {
                const res = await api.get('/me')
                this.userLogin = res.data.login
                this.role = res.data.role
            } catch {
                this.token = ''
                this.role = ''
                sessionStorage.removeItem('token')
            }
            this.initialized = true
        },

        async login(login: string, password: string) {
            const res = await api.post('/login', { login, password })
            this.token = res.data.token
            this.role = res.data.role
            sessionStorage.setItem('token', this.token)
            this.initialized = true
        },

        logout() {
            this.token = ''
            this.userLogin = ''
            this.role = ''
            this.initialized = true
            sessionStorage.removeItem('token')
        }
    }
})