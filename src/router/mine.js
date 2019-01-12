import mine from '@/pages/mine/mine'
import personInfo from '@/pages/mine/personInfo'
import messageInfo from '@/pages/mine/messageInfo'


export default {
  path: 'mine',
  name: 'mine',
  component: mine,
  meta: {
    requiresAuto: true
  },
  children: [{
      path: 'personInfo',
      name: 'personInfo',
      component: personInfo,
    },
    {
      path: 'messageInfo',
      name: 'messageInfo',
      component: messageInfo,
    }
  ]
}
