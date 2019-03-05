import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import login from '@/page/login'
import register from '@/page/register'
import personal from '@/page/personal'
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
import oneNotification from '@/components/content/oneNotification'
import experience from '@/components/content/experience'
import notificationRight from '@/components/content/notificationRight'
import oneNotificationRight from '@/components/content/notificationRight'
import experienceDetail from '@/components/content/experienceDetail'
import apartment from '@/components/content/apartment'
import apartmentHome from '@/page/apartmentHome'
import editorMessage from '@/components/content/editorMessage'
import admin from '@/page/admin'
import company from '@/components/admin/company'
import job from '@/components/admin/job'
import message from '@/components/admin/message'
import publicUser from '@/components/admin/publicUser'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    //求职用户路由
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
      path: '/login',
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
      path: '/register',
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
    {
      path: '/searchContent/:hiring?',
      name: 'searchContent',
      component: searchContent,
    },
    {
      path: '/searchDetail/:id?',
      name: 'searchDetail',
      component: searchDetail,
    },
    {
      path:'/personal',
      name:'personal',
      component:personal
    },
    {
      path:'/experienceDetail/:id?',
      name:'experienceDetail',
      component:experienceDetail
    },
    {
      path:'/blank/:id?',
      name:'blank',
      component:blank,
      redirect:'experienceDetail',
    },

    // 公司人员路由
    {
      path: '/apartmentHome',
      name: 'apartmentHome',
      component:apartmentHome,
      // redirect:'notification',
      children:[
        {
          path:'/oneNotification',
          name:'oneNotification',
          component: oneNotification,
          children:[
            {
              path:'oneNotificationRight/:id?',
              name:'oneNotificationRight',
              component: oneNotificationRight,
            }
          ]
        },
        {
          path:'apartment',
          name:'apartment',
          component: apartment,        
        },
        {
          path:'editorMessage',
          name:'editorMessage',
          component: editorMessage, 
        }
      ]
    },

    // 管理员路由
    {
      path:'/admin',
      name:'admin',
      component:admin,
      redirect:'admin/message',
      children:[
        {
          path:'company',
          name:'company',
          component: company,
        },
        {
          path:'job/:id?',
          name:'job',
          component: job,
        },
        {
          path:'message',
          name:'message',
          component: message,
        },
        {
          path:'publicUser/:id?',
          name:'publicUser',
          component: publicUser,
        },
      ]
    }


    
    
    
   
    
  ]
})
