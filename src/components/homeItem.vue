<template>
  <div class="item">

    <div class="imgContainer">
      <router-link to="home">
        <div class="imgWrap">
          <img :src="catImg">
        </div>
      </router-link>
    </div>

    <div class="info">
      <div class="user">
        <div class="imgItem">
          <img :src="userImg?userImg:'/static/images/defaultUserImg.png'">
        </div>
        <span class="name">{{nickName}}</span>
      </div>
      <div class="more text_middle">
        <span class="iconfont" :class="{like_color:like}" @click="addLikeHadnler">{{like?'&#xe6bc;':'&#xe6bb;'}}</span>
        <router-link to=""><span class="iconfont">&#xe664;</span></router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      nickName: {
        type: String,
        default: ''
      },
      catImg: {
        type: String,
        default: '/static/images/cat.jpg'
      },
      userImg: {
        type: String,
        default: '/static/images/defaultUserImg.png'
      },
      id: {
        type: [Number, String],
        default: ''
      }
    },
    data() {
      return {
        like: false
      }
    },

    methods: {
      //点赞切换，并发送请求
      addLikeHadnler() {
        this.like = this.like ? false : true;
        //TODO:ajax
      }
    }
  }

</script>
<style scoped lang="less">
  @import url('../assets/styles/mix.less');

  .item {
    margin: 30px 20px 0 0;
    width: 285px;
    height: 370px;
    .left;

    .imgContainer {
      width: 285px;
      height: 340px;

      .imgWrap {
        margin: 0 5px 10px;
        border-radius: 3px;
        width: 275px;
        height: 320px;
        overflow: hidden;
      }
    }

    //imgContainer
    .info {
      height: 30px;

      .user {
        .left;
        margin-left: 20px;

        .middle() {
          display: inline-block;
          vertical-align: middle;
        }

        .imgItem {
          width: 30px;
          height: 30px;
          background: @c-oragin;
          border-radius: 50%;
          margin-right: 5px;
          overflow: hidden;
          .middle
        }

        .name {
          font-size: 14px;
          .middle
        }
      }

      .more {
        .right;
        word-spacing: 10px;
        height: inherit;
        margin-right: 10px;

        & span {
          font-size: 20px !important;
          color: @text-color;
          cursor: pointer;
        }

        .like_color {
          color: red;
        }
      }
    }
  }

  //item

</style>
