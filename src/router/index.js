import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import login from '@/page/login'
import register from '@/page/register'
import searchDetail from '@/page/searchDetail'
import searchContent from '@/page/searchContent'
import studentRegister from '@/components/register/studentRegister'
import apartmentRegister from '@/components/register/apartmentRegister'
import studentLogin from '@/components/login/studentLogin'
import adminLogin from '@/components/login/adminLogin'
import apartmentLogin from '@/components/login/apartmentLogin'
import blank from '@/components/index/blank'
import homePage from '@/components/content/showContent'
import attention from '@/components/content/attention'
import notification from '@/components/content/notification'
import experience from '@/components/content/experience'
import notificationRight from '@/components/content/notificationRight'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component:home,
      redirect:'homepage',
      children:[
        {
          path:'/homepage',
          name:'homepage',
          component: homePage,
        },
        {
          path:'/attention',
          name:'attention',
          component: attention,
        },
        {
          path:'/notification',
          name:'notification',
          component: notification, 
          children:[
            {
              path:'notificationRight/:id?',
              name:'notificationRight',
              component:notificationRight,
            }
          ]       
        },
        {
          path:'/experience',
          name:'experience',
          component: experience,        
        },
      ]
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
        },
        {
          path: 'register',
          name: 'register',
          component: register,
          redirect:'register/studentRegister',
          children:[
            {
              path: ':name',
              name: 'studentRegister',
              component: studentRegister,
            },
            {
              path: ':name',
              name: 'apartmentRegister',
              component: apartmentRegister,
            }
            
          ]
        },
      ]     
    },
    {
      path: '/searchContent',
      name: 'searchContent',
      component: searchContent,
    },
    {
      path: '/searchDetail',
      name: 'searchDetail',
      component: searchDetail,
    }
    
    
    
   
    
  ]
})
