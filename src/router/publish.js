import publish from '@/pages/publish/publish'
import publish_daily from '@/pages/publish/publish_daily'
import publish_host from '@/pages/publish/publish_host'

export default {
  path: 'publish',
  name: 'publish',
  redirect: {
    name: 'publish_daily'
  },
  component: publish,
  meta: {
    requiresAuto: true
  },
  children: [{
      path: 'publish_daily',
      name: 'publish_daily',
      component: publish_daily,
    },
    {
      path: 'publish_host',
      name: 'publish_host',
      component: publish_host,
    },
  ]
}
