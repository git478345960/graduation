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
// 投递简历进行处理
summitResume(params){
  return axios.get('/summitResume',{params})
},
  // 返回所有的兼职信息
  getPartTimeInfos(){
    return axios.get('/getPartTimeInfo');
  },
  // 传入hiring时返回对象数组，传入id时返回某个对象
  getPartTimeInfo(params){
    return axios.get('/getPartTimeInfo',{params})
  },
  getPartTime(params){
    return axios.get('/getPartTime',{params})
  },
  removePartTimeInfo(params){
    return axios.get('/removePartTimeInfo',{params})
  },
  modifyPartTimeInfo(params){
    return axios.get('/modifyPartTimeInfo',{params})
  },
  addPartTimeInfo(params){
    return axios.get('/addPartTimeInfo',{params})
  },
  apartUserRegister(params){
    return axios.get('/apartUserRegister',{params})
  },
  loginApart(params){
    return axios.get('/loginApart',{params})
  },
  //查看所有公司人员
  getAllApartUser(){
    return axios.get('/getAllApartUser');
  },
  getAllUser(params){
    return axios.get('/getAllUser',{params});
  },
  getApartUser(params){
    return axios.get('/getApartUser',{params});
  },
  
  modifyApartUser(params){
    return axios.get('/modifyApartUser',{params});
  },
  getResumes(params){
    return axios.get('/getResumes',{params})
  },
  // 禁止或允许招聘单位登录
  modifyApartLoginUserFlag(params){
    return axios.get('/modifyApartLoginUserFlag',{params});
  },
  modifyLoginUserFlag(params){
    return axios.get('/modifyLoginUserFlag',{params})
  },

  // 获取个人简历
  getMyResume(params){
    return axios.get('/getMyResume',{params})
  },
  getResumes(params){
    return axios.get('/getResumes',{params});
  },
  // 修改个人简历
  modifyResume(params){
    return axios.get('/modifyResume',{params});
  },
  // 获取面试经验s
  getExperience(){
    return axios.get('/getInterviewExperience');
  },
  // 获取某个面试经验
  getDetailExperience(params){
    return axios.get('/getInterviewExperience',{params})
  },


  // 发布信息
  addMessageInfo(params){
    return axios.get('/addMessageInfo',{params});
  },
  removeMessageInfo(params){
    return axios.get('/removeMessageInfo',{params});
  },
  modifyMessageInfo(params){
    return axios.get('/modifyMessageInfo',{params});
  },
    // 获取通知信息，返回100条数据
    getMessageInfo(){
      return axios.get('/getMessageInfo')
    },
    // 返回特定的一条内容
    getMessage(params){
      return axios.get('/getMessageInfo',{params})
    },





  

}
export default api
