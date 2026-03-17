import api from './index'

export const login = (login: string, password: string) =>
    api.post('/login', { login, password })