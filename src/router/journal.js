import journal from '@/pages/journal/journal'
import journal_record_list from '@/pages/journal/journal_record_list'
import journal_post_list from '@/pages/journal/journal_post_list'
import articleDetail from '@/pages/journal/articleDetail'

export default {
  path: 'journal',
  name: 'journal',
  redirect: {
    name: 'journal_record_list'
  },
  component: journal,
  meta: {
    requiresAuto: true
  },
  children: [{
      path: 'journal_record_list',
      name: 'journal_record_list',
      component: journal_record_list
    },
    {
      path: 'journal_post_list',
      name: 'journal_post_list',
      component: journal_post_list
    },
    //为了激活active-class
    {
      path: 'journal_record_list/articleDetail/:id',
      name: 'articleDetail',
      alias: "articleDetail/:id",
      component: articleDetail
    },
    {
      path: 'journal_post_list/articleDetail/:id',
      name: 'articleDetail2',
      alias: 'articleDetail/:id',
      component: articleDetail
    },
  ]
}
