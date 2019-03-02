import axios from '@/axios'

const api = {
  // 登录，传账号和密码
  login(params) {
    return axios.get('/login', {params})
  },
  // 注册，传账号和密码
  register(params){
    return axios.get('/register',{params})
  },
  // 获取通知信息，返回20条数据
  getMessageInfo(){
    return axios.get('/getMessageInfo')
  },
  getPartTimeInfo(){
    return axios.get('/getPartTimeInfo')
  },
  getMyResume(){
    return axios.get('/getMyResume')
  },
  getExperience(){
    return axios.get('/getInterviewExperience')
  },
  getDetailExperience(params){
    return axios.get('/getInterviewExperience',{params})
  }

  

  
}

export default api
