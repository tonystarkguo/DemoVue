import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Home from '@/components/home'
import Airplane from '@/components/Airplane'
import Train from '@/components/Train'
import CityList from '@/components/CityList'
import Mint from 'mint-ui'

import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'cn'}) //可以设置语言，支持中文和英文
Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/Home',
      name:'Home',
      component:Home
    },
    {
      path:'/Airplane',
      name:'Airplane',
      component:Airplane,
      children:[{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Starcity',
        name:'airplaneStar',
        component:CityList
      },{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Endcity',
        name:'airplaneEnd',
        component:CityList
      }
      ]
    },
    {
      path:'/Train',
      name:'Train',
      component:Train
    },
    {
      path:"*",
      redirect: '/HelloWorld/'
    }
  ]
})
