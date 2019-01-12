<template>
  <div class="comment_con clear">
    <div class="pic">
      <img :src="'api/'+userImg">
    </div>
    <div class="content">
      <div class="con_text">
        <p>
          <span class="userName">{{userName}}：</span>{{content}}
        </p>
      </div>
      <div class="date">
        <span class="time">{{this.$format(new Date(time),'yyyy-mm-dd hh:ff')}}</span>
        <div class="right">
          <slot name="comment_btn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userName: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      userImg: {
        type: String,
        required: true
      }
    }
  }

</script>

<style lang="less" scoped>
  @import url('../assets/styles/mix.less');

  .comment_con {
    border-bottom: 1px solid #eee;
    width: 980px;
    margin: 10px 10px 0;

    .pic {
      .left;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 10px 10px 0;
      overflow: hidden;
    }


    .content {
      .left;
      position: relative;
      font-size: 12px;
      width: 930px;
      min-height: 50px;
      color: @text-color;

      .con_text {
        color: #000;
        margin-top: 5px;
        margin-bottom: 25px;

        .userName {
          color: @c-oragin;
        }

        &>p {
          margin-right: 40px;
        }
      }

      .date {
        width: 100%;
        height: 20px;
        position: absolute;
        bottom: 0px;
        right: 0;
        line-height: 1;
      }

      .time {
        line-height: 20px;
      }
    }
  }

</style>
