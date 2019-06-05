<template>
  <div class="detail_common">
    <div class="title">
      <span class="icon_foot"></span>
      <div class="date_time">
        <span class="date">{{datetime[0]}}</span>
        <span class="time">{{datetime[1]}}</span>
      </div>
      <h1 class="caption">标题：{{title}}</h1>
    </div>
    <div class="content ql-snow ">
      <div class="ql-editor ql-blank" v-html="content"></div>
    </div>
    <div class="imgWrap">
      <div class="innerWrap">
        <img :src="imgSrc" v-if="imgSrc">
      </div>
    </div>
    <div class="imgList">
      <ul>
        <li v-for="(src, index) in imgList" :key="index" @click="toggleImgHandler( src,index) ">
          <img :src="src" :class="{active:index ==activeIndex}">
        </li>
      </ul>
    </div>

    <div class="location">
      <span class="iconfont">&#xe64c;</span>
      <span class="local">{{locationArr[0]}}</span>·
      <span class="local">{{locationArr[1]}}</span>·
      <span class="local">{{locationArr[2]}}</span>
    </div>
    <slot name="btn"></slot>

    <div class="artical_bottom">
      <div class="item">
        <span class="iconfont" :class="{like_color:I_liked}" @click="addLikeHadnler">&#xe6bb;</span>
        <span>{{star_count}}</span>
      </div>

      <div class="item">
        <span class="iconfont">&#xe664;</span>
        <span>{{comment_count}}</span>
      </div>
      <div class="item">
        <span class="iconfont">&#xe61d;</span>
        <span>{{collect_count}}</span>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      time: {
        type: [Date, String],
        required: true,
        default: new Date()
      },
      content: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      imgList: {
        type: Array,
        required: true
      },
      star_count: {
        type: [Number, String],
        required: true
      },
      comment_count: {
        type: [Number, String],
        required: true
      },
      collect_count: {
        type: [Number, String],
        required: true
      },
      I_liked: {
        type: Boolean,
        required: true
      },
      I_collect: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        datetime: '',
        locationArr: this.location.split(' '),
        imgSrc: '',
        activeIndex: 0
      }
    },
    methods: {
      //切换图片
      toggleImgHandler(src, index) {
        this.activeIndex = index;
        this.imgSrc = src;
      },
      addLikeHadnler() {
        this.I_liked = this.I_liked ? false : true;
      }
    },
    watch: {
      imgList(val) {
        this.imgSrc = val[0]
      },
      time(val) {
        this.datetime = this.$format((this.time), "yyyy-mm-dd hh:ff").split(" ")
      }
    }

  };

</script>
<style scoped lang='less'>
  @import url("../assets/styles/mix.less");

  .detail_common {
    width: 100%;

    .title {
      position: relative;
      padding: 10px 20px 10px 0;
      height: 40px;
      box-sizing: border-box;

      .icon_foot {
        position: absolute;
        left: 5px;
        display: block;
        width: 20px;
        height: 20px;
        background: url("../assets/images/footer_small.png") no-repeat;
      }

      .caption {
        font-size: 20px;
        line-height: 1;
        margin-left: 30px;
        color: #6f6f6f;
        max-width: 820px;
      }

      .date_time {
        color: #707070;
        font-size: 12px;
        .right;

        .time {
          margin-left: 5px;
        }
      }
    }

    //end title
    .content {
      margin: 10px 20px;
      font-size: 14px;
      text-indent: 2em;
      color: #6f6f6f;
      line-height: 21px;
    }

    .imgWrap {
      width: 400px;
      height: 400px;
      margin: 20px auto;

      .innerWrap {
        width: 400px;
        height: 400px;
        box-sizing: border-box;
        display: table-cell;
        text-align: center;
        vertical-align: middle;

        &>img {
          max-width: 400px;
          max-height: 400px;
        }
      }
    }

    //imgWrap
    .imgList {
      width: 820px;
      height: 80px;
      margin: 0 auto;

      &>ul {
        width: 810px;
        display: flex;
        overflow: hidden;

        &>li {
          width: 80px;
          height: 80px;
          margin-right: 10px;
          box-sizing: border-box;

          &>img {
            max-width: 80px;
            max-height: 80px;
          }

          .active {
            border: 1px solid @c-oragin;
          }
        }
      }
    }

    //imgList
    .location {
      position: relative;
      margin-top: 20px;
      height: 20px;

      .iconfont {
        color: @c-oragin;
        font-size: 24px;
      }

      .local {
        font-size: 12px;
        color: #6f6f6f;
        line-height: 20px;
      }
    }

    //location
    .artical_bottom {
      height: 30px;

      .item {
        .right;
        cursor: pointer;
        position: relative;
        margin-right: 65px;
        height: inherit;
        font-size: 14px;

        &:after {
          display: inline-block;
          content: "";
          height: 100%;
          vertical-align: middle;
        }

        .like_color {
          color: red;
        }

        &>span {
          vertical-align: middle;
        }

        .iconfont {
          font-size: 18px;
        }
      }

      //item
    }

    //article_bottom
  }

</style>
