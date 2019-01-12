import app from '@/pages/app'
import community from '@/pages/community'
import home from '@/pages/home'
import journal from './journal'
import publish from './publish'
import mine from './mine'

export default {
  path: '/app',
  name: 'app',
  redirect: {
    name: 'home'
  },
  component: app,
  children: [{
      path: 'home',
      name: 'home',
      component: home
    },
    {
      path: 'community',
      name: 'community',
      component: community,
      meta: {
        requiresAuto: true
      },
    },
    mine,
    publish,
    journal
  ]
}
