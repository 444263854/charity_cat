import registers from '../pages/account/registers'
import login from '../pages/account/login'
import register from '../pages/account/register'
import modifyPassword from '../pages/account/modifyPassword'


export default {
  path: '/registers',
  name: 'registers',
  component: registers,
  children: [{
      path: 'login',
      name: 'login',
      component: login
    },
    {
      path: 'register',
      name: 'register',
      component: register
    },
    {
      path: 'modifyPassword',
      name: 'modifyPassword',
      component: modifyPassword
    }
  ]
}
