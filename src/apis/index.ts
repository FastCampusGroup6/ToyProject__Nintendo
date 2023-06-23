import axios from 'axios'

const api = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net',
  headers: {
    apiKey: 'KDT5_nREmPe9B',
    username: 'KDT5_Team6'
  }
})
export default api


