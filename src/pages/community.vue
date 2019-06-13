<template>
  <div class="community">
    <header class="header">
      <div class="title">
        <i class="pic"></i>
        <h1>喵星人的故事</h1>
      </div>
      <div class="circle"></div>
      <router-link :to="{name:'publish_daily'}">
        <Base-Button type="plain" class="public">记录喵星人</Base-Button>
      </router-link>
    </header>
    <div class="mian">
      <h1>喵星人的成长故事</h1>
      <div class="select">
        <cat-sel :formData="formData">
          <Base-Button type="noround" @click.prevent="resetForm" slot="reset">重置</Base-Button>
          <Base-Button type="noround" @click.prevent="searchHandler" slot="search">搜索</Base-Button>
        </cat-sel>
      </div>
      <div class="article_list">
        <artical-item
          v-for="(item, index) in dataObj"
          :key="index"
          v-bind="item"
          path="articleDetail"
        ></artical-item>
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
import articalItem from "../components/articleItem";
import selector from "../components/selector.vue";
export default {
  data() {
    return {
      loadMore: "点击加载更多",
      messageCount: 10,
      formData: {
        cityValue: "",
        ageValue: "",
        healthCondition: "",
        sex: ""
      },
      total: 0,
      dataObj: []
    };
  },
  created() {
    this.axios
      .post("/article/List", {
        page: 1,
        category: "MyDaily"
      })
      .then(res => {
        if (res.data.status == 200) {
          var content = res.data.content;
          this.dataObj = content.articleList;
          this.total = content.total;
        } else {
          this.$messageBox(res.data.msg);
        }
      });
  },
  methods: {
    resetForm(ev) {
      for (var key in this.formData) {
        this.formData[key] = "";
      }
    },
    searchHandler() {},
    loadingMore() {
      this.loadMore = "正在加载...";
      //ajax
      let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, 1000);
      });

      promise.then(() => {
        console.log(this);
        this.loadMore = "点击加载更多";
      });
    }
  },
  components: {
    "artical-item": articalItem,
    "cat-sel": selector
  }
};
</script>

<style scoped lang='less'>
@import url("../assets/styles/mix.less");

.community {
  width: 1200px;
  margin: 0 auto;

  .header {
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid @c-oragin;
    margin: 0 0 50px;
    padding-top: 60px;
    height: 320px;
    background: url("../assets/images/cats.png") no-repeat right 0 bottom 15px;

    .title {
      height: 30px;
      position: relative;

      .pic {
        width: 30px;
        height: 30px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background: url("../assets/images/footer.png") no-repeat;
      }

      h1 {
        text-indent: 50px;
        font-size: 24px;
        line-height: 30px;
      }
    }

    //end title
    .circle {
      background: @c-oragin;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      position: absolute;
      top: 60px + 60px; //header内边距
      left: 60px;
    }

    //end circle
    .public {
      width: 200px;
      height: 60px;
      font-size: 24px;
      position: absolute;
      top: 80px + 60px;
      left: 210px;
    }
  }

  //end header
  .mian {
    width: inherit;
    margin-top: 50px;

    .loading {
      margin-top: 40px;
      height: 24px;

      & > p {
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

    h1 {
      font-size: 24px;
      text-indent: 10px;
    }

    .select {
      margin: 25px 0;
    }

    //end select
    .article_list {
      min-height: 810px;
      margin-top: 50px;
    }

    .loading {
      font-size: 14px;
      line-height: 24px;
      color: @c-oragin;
      margin: 10px 0;
      text-align: center;
    }
  }

  //end main
}
</style>
