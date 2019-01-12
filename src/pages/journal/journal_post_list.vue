<template>
  <div class="listWrap">
    <div class="publish_journal">
      <router-link :to="{name:'publish_host'}">
        <Base-Button type="noround" class="publish_btn">发布</Base-Button>
      </router-link>
    </div>
    <journal-item path="articleDetail" v-for="(value, index) in dataObj" v-bind="value" :key="index"></journal-item>
    <div class="loading">
      <Paging :total="total" @change="pageHandler"></Paging>
    </div>
  </div>
</template>
<script>
  import journalItem from './journalItem'
  import Paging from '@/components/paging'
  export default {
    data() {
      return {
        dataObj: [],
        total: 0,
      }
    },
    created() {
      this.axios.post('api/article/List', {
        page: 1,
        total: true,
        category: 'findHost'
      }).then((res) => {
        if (res.data.status == 200) {
          var content = res.data.content;
          this.dataObj = content.articleList
          this.total = content.total
        } else {
          this.$messageBox(res.data.msg)
        }
      })
    },
    methods: {
      pageHandler(index) {
        this.axios.post('api/article/List', {
          page: index,
          category: 'MyDaily'
        }).then((res) => {
          if (res.data.status == 200) {
            this.dataObj = res.data.content.articleList
          } else {
            this.$messageBox(res.data.msg)
          }
        })
      }
    },
    components: {
      'journal-item': journalItem,
      Paging
    },
  }

</script>

<style scoped lang="less">
  @import url('../../assets/styles/mix.less');

  .listWrap {
    min-height: 864px;

    .publish_journal {
      .publish_btn {
        font-size: 18px;
        width: 100px;
        height: 30px;
        margin: 0 auto;
        display: block;
        padding: 0;
      }
    }

    .loading {
      margin-top: 40px;
      height: 24px;
      text-align: center;
    }
  }

</style>
