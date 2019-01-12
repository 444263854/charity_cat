<template>
  <article class="detail">
    <detail-content v-bind="detailData">
      <div class="btn" slot="btn">
        <router-link :to="{name:'MyCat_record'}">
          <Base-Button type="noround" class="find_host">查看喵星人主人</Base-Button>
        </router-link>
      </div>
    </detail-content>

    <div class="edit_comment">
      <div class="pic">
        <img :src="'api/'+avatar" v-if="avatar">
      </div>
      <textarea class="edit_con" :class="{change_bor_color: isFocus}" v-model="comment_edit_text" @focus="isFocus = true"
        @blur="isFocus = false" placeholder="  说点什么..." ref="comment_edit"></textarea>
      <div class="comment_btn">
        <Base-Button @click="commentHandler">评论</Base-Button>
      </div>
      <div class="triangle" :class="{change_bor_color: isFocus}"></div>
    </div>

    <div class="comment_box">
      <comment-item v-for="(item, index) in comment_list" :user-name="item.username" :user-img="item.avatar" :time="item.time"
        :content="item.content" :key="index">
        <Base-Button class="reply_btn" type="text" slot="comment_btn">回复</Base-Button>
      </comment-item>
      <div class="load_more"><span @click="loadMoreComment" :class="{disable:disable}"> 加载更多</span></div>
    </div>
  </article>
</template>
<script>
  import comment_item from '@/components/comment_Item.vue'
  import detail_content from "@/components/detail_content.vue";

  export default {
    computed: {
      avatar() {
        return this.$root.$data.get('avatar')
      }
    },
    data() {
      return {
        detailData: {
          title: '',
          time: '',
          imgList: [],
          content: '',
          I_liked: false,
          location: '广东省 广东市 东山区',
          star_count: 0,
          comment_count: 0,
          collect_count: 0,
          I_collect: false,
        },
        comment_edit_text: '',
        isFocus: false,
        pages: 0,
        comment_list: [],
        disable: false
      }
    },
    created() {
      this.getArticle();
      this.getComment();
    },
    methods: {
      getArticle() {
        this.axios.get('api/article/detail', {
          params: {
            articleID: this.$route.params.id
          }
        }).then((res) => {
          if (res.data.status == 200) {
            var con = res.data.content;
            this.detailData.title = con.title;
            this.detailData.content = con.content;
            this.detailData.imgList = con.imgList;
            this.detailData.time = new Date(con.time);
            this.detailData.comment_count = con.commentCount
          } else {
            this.$messageBox(res.data.msg)
          }
        })
      },
      //评论
      commentHandler() {
        this.axios.post('api/comment', {
          comment: this.comment_edit_text
        }, {
          params: {
            articleID: this.$route.params.id
          }
        }).then((res) => {
          var data = res.data
          if (data.status == 200) {
            //刷新评论
            this.comment_edit_text = null;
            this.comment_list = [];
            this.detailData.comment_count = data.content.commentCount
            this.getComment();
          } else {
            this.$messageBox(res.data.msg)
          }
        })
      },
      getComment() {
        this.axios.get('api/comment', {
            params: {
              articleID: this.$route.params.id,
              page: this.pages++,
              count: 10
            }
          }).then((res) => {
            this.disable = false;
            if (res.data.status == 200) {
              this.comment_list = this.comment_list.concat(res.data.content)
            } else {
              this.$messageBox(res.data.msg)
            }
          })
          .catch(() => {
            this.disable = false;
          })
      },
      loadMoreComment() {
        if (!this.disable) {
          this.disable = true;
          this.getComment()
        } else {
          return
        }
      }
    },
    components: {
      'comment-item': comment_item,
      'detail-content': detail_content
    }
  }

</script>
<style scoped lang='less'>
  @import url('../../assets/styles/mix.less');

  .detail {
    width: 1000px;
    margin: 0 auto;
    min-height: 980px;

    .btn {
      text-align: center;

      .find_host {
        border-width: 2px;
        font-weight: 600;
        font-size: 20px;
        height: 40px;
        width: 200px;
      }
    }

    //btn
    .edit_comment {
      height: 3.2em;
      font-size: 12px;
      margin-top: 25px;
      position: relative;

      .pic {
        .left;
        height: 30px;
        width: 30px;
        margin: 4px 10px;
        border-radius: 50%;
        overflow: hidden;
      }

      .edit_con {
        .left;
        position: relative;
        border: 1px solid #ddd;
        height: 3.2em;
        width: 860px;
        box-sizing: border-box;
        font-size: 12px;
        color: @text-color;
        line-height: 1.5em;
        overflow-y: auto;
        outline: none;
        resize: none;
      }

      .triangle {
        width: 20px;
        height: 20px;
        border: 1px solid #ddd;
        border-right: none;
        border-bottom: none;
        background: #fff;
        transform: rotate(45deg);
        position: absolute;
        top: -10px;
        right: 185px;
      }

      .change_bor_color {
        border-color: @c-oragin;
      }

      .comment_btn {
        .right;
        width: 40px;
        height: 24px;
        margin: 7px 25px;

        &>button {
          width: 40px;
          height: 24px;
          font-size: 12px;
          padding: 0;
        }
      }
    }

    //edit_comment
    .comment_box {
      border-top: 1px solid #eee;
      margin-top: 20px;

      .reply_btn {
        font-size: 12px;
        color: @text-color;
        height: 20px; // vertical-align: middle;
      }

      .load_more {
        color: @c-oragin;
        text-align: center;
        margin-top: 10px;
        cursor: pointer;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }


  }

</style>
