import api from './index'

const getLoveMessage = () => api.get(`/loveMessage`)
const addLoveMessage = (msg: string) => api.post(`/loveMessage`, { message: msg })

export { getLoveMessage, addLoveMessage }