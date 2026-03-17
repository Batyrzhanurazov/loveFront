import { defineStore } from 'pinia'
import api from '@/api'

export const useUserStore = defineStore('user', {
    state: () => ({
        userLogin: '',
        role: '',
        initialized: false
    }),

    actions: {
        async init() {
            if (this.initialized) return

            try {
                const res = await api.get('/me')
                this.userLogin = res.data.login
                this.role = res.data.role
            } catch { }

            this.initialized = true
        },

        async fetchMe() {
            try {
                const res = await api.get('/me')
                this.userLogin = res.data.login
                this.role = res.data.role
            } catch {
                this.userLogin = ''
                this.role = ''
            }
            this.initialized = true
        },

        async login(login: string, password: string) {
            await api.post('/login', { login, password })
            this.initialized = false
            await this.fetchMe()
        },

        async logout() {
            try { await api.post('/logout') } catch { }
            this.userLogin = ''
            this.role = ''
            this.initialized = false
        }
    }
})