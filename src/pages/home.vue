<template>
  <div class="home">
    <header class="header">
      <div class="inner_header">
        <div class="loudText">报告组织，发现喵星人的踪迹</div>

        <router-link :to="{name:'publish_host'}"><button class="publish_btn">发布喵星人</button></router-link>
      </div>
    </header>
    <!--header-->
    <div class="wrap">
      <div class="title">
        <h1 class="text">寻找喵星人</h1>
      </div>
      <cat-sel :formData="formData">
        <Base-Button type="noround" @click.prevent="resetForm" slot="reset">重置</Base-Button>
        <Base-Button type="noround" @click.prevent="searchHandler" slot="search">搜索</Base-Button>
      </cat-sel>
      <div class="content">
        <home-item v-for="(item, index) in itemData" :key="index" :id="item.id" :nick-name="item.nickName" :user-img="item.userImg"
          :cat-img="item.catImg"></home-item>
        <!--item-->
      </div>
      <div class="loading">
        <p>
          <span @click="loadingMore">{{loadMore}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import selector from '../components/selector.vue';
  import homeItem from '../components/homeItem.vue';
  export default {
    data() {
      return {
        like: false,
        loadMore: '点击加载更多',
        formData: {
          cityValue: '',
          ageValue: '',
          healthCondition: '',
          sex: ''
        },
        itemData: [{
            id: 1,
            nickName: '张三',
            catImg: '/static/images/cat.jpg',
            userImg: '',
          }, {
            id: 2,
            nickName: '张三',
            catImg: '/static/images/cat.jpg',
            userImg: '',
          },
          {
            id: 3,
            nickName: '张三',
            catImg: '/static/images/cat.jpg',
            userImg: '',
          },
          {
            id: 4,
            nickName: '张三',
            catImg: '/static/images/cat.jpg',
            userImg: '',
          },
          {
            id: 5,
            nickName: '张三',
            catImg: '/static/images/cat.jpg',
            userImg: '',
          },
          {
            id: 6,
            nickName: '张三',
            catImg: '/static/images/cat.jpg',
            userImg: '',
          },
        ]
      }
    },
    methods: {
      //重置
      resetForm() {
        for (var key in this.formData) {
          this.formData[key] = '';
        }
      },
      //查找
      searchHandler() {
        console.log(this.formData)
      },

      loadingMore() {
        this.loadMore = '正在加载...'
        //ajax
        let promise = new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve();
          }, 1000)
        });

        promise.then(() => {
          console.log(this)
          this.loadMore = '点击加载更多'
        })

      }

    },
    components: {
      'cat-sel': selector,
      'home-item': homeItem
    }
  }

</script>

<style scoped lang="less">
  @import url('../assets/styles/mix.less');

  .home {

    .header {
      height: 300px;
      margin: 0 auto;
      padding-top: 30px;
      background: #fcd8d8;

      .inner_header {
        position: relative;
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        background-image: url('../assets/images/loudspeake.png'),
          url('../assets/images/home_cat.png');
        background-repeat: no-repeat;
        background-position: left 90px top 25px, right 30px bottom 5px;

        .loudText {
          position: absolute;
          left: 230px;
          top: 40px;
          width: 277px;
          height: 81px;
          background: url(../assets/images/border_btn_small.png) no-repeat;
          font-size: 16px;
          text-align: center;
          cursor: default;
          user-select: none;

          &::after {
            content: "";
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

        }

        //loudText
        .publish_btn {
          position: absolute;
          top: 140px;
          left: 295px;
          font-size: 60px;
          color: @c-oragin;
          outline: none;
          border: none;
          background: transparent;
          background-image: url(../assets/images/border_btn.png);
          background-repeat: no-repeat;
          width: 415px;
          height: 122px;
          cursor: pointer;

          &:active {
            top: 141px;
            left: 296px;
          }

        }

        //publish_btn
      }



    }

    //end header
    .wrap {
      width: 1200px;
      margin: 0 auto;

      .title {
        height: 80px;
        box-sizing: border-box;
        border-bottom: 1px solid @c-oragin;
        margin-bottom: 20px;
        padding-top: 20px;
      }

      .text {
        color: @c-oragin;
        font-size: 28px;
        line-height: 1;
        width: 400px;
        margin: 0 auto;
        text-align: center;

        &::before,
        &::after {
          content: "";
          height: 2px;
          width: 100px;
          background: @c-oragin;
          display: inline-block;
          vertical-align: middle;
        }

        &::after {
          margin-left: 25px;
        }

        &::before {
          margin-right: 25px;
        }
      }

      .content {
        width: 1220px;
        overflow: hidden;
      }

      //content
      .loading {
        margin-top: 40px;
        height: 24px;

        &>p {
          font-size: 14px;
          line-height: 24px;
          color: @c-oragin;
          text-align: center;

          span {
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    //end wrap
  }

</style>
