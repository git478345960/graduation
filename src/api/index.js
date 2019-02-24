import axios from '@/axios'

const api = {
  login(params) {
    return axios.get('/job/login', {params})
  },
  
}

export default api
