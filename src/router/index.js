import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import HomePage from '@/components/HomePage'
import Activity from '@/components/Activity'
import Report from '@/components/Report'
import Recommend from '@/components/Recommend'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
