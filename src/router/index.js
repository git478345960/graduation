import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import login from '@/page/login'
import studentLogin from '@/components/login/studentLogin'
import adminLogin from '@/components/login/adminLogin'
import apartmentLogin from '@/components/login/apartmentLogin'
import register from '@/components/register/register'
import blank from '@/components/index/blank'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank,
      children:[
        {
          path: 'login',
          name: 'login',
          component: login,
          redirect:'login/studentLogin',
          children:[
            {
              path: ':name',
              name: 'studentLogin',
              component: studentLogin,
            },
            {
              path: ':name',
              name: 'apartmentLogin',
              component: apartmentLogin,
            },
            {
              path: ':name',
              name: 'adminLogin',
              component: adminLogin,
            }
          ]
        }
      ]     
    }
    
    
    
   
    
  ]
})
