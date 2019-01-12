<template>
  <div class="artical_item">
    <div class="ItemTitle">
      <i class="icon"></i>
      <span class="caption">标题：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
      <div class="date_time">
        <span class="date">2018年7月20日</span>
        <span class="time">11:11</span>
      </div>
    </div>
    <div class="detail">
      <div class="overview">
        <p class="abstract">disabdashdiuaohdoiasdhioasdhioashdiosahdiosahdiosahdiosahdioahsdiohsaiodhsaiodhiosadhiosahdiosadhiosahdiosadhioasdhios</p>
      </div>
      <img src="../assets/images/cat.jpg">
      <p class="more">
        <span>查看全文></span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        like: false
      }
    },
    methods: {
      //点赞切换，并发送请求
      addLikeHadnler() {
        if (this.like) {
          this.like = false;
          //ajax
        } else {
          this.like = true;
          //ajax
        }
      }
    }
  }

</script>
<style scoped lang='less'>
  @import url('../assets/styles/mix.less');

  .artical_item {
    width: 1000px;
    height: 235px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ccc;

    &+& {
      margin-top: 30px;
    }

    .ItemTitle {
      position: relative;
      padding: 12px 20px 10px 0;
      height: 40px;
      box-sizing: border-box;

      .icon {
        position: absolute;
        left: 5px;
        display: block;
        width: 20px;
        height: 20px;
        background: url('../assets/images/footer_small.png') no-repeat;
      }

      .caption {
        font-size: 18px;
        text-indent: 30px;
        line-height: 1;
        margin-left: 30px;
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

    //end ItemTitle
    .detail {
      height: 180px;
      box-sizing: border-box;
      margin: 0 20px 0 30px;
      position: relative;
      font-size: 14px;

      .overview {
        .left;
        width: 718px;
        height: 10.5em;
        /*注意不嫩出现半截文字,所以高度是行高的整数倍数*/
        line-height: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;

        .abstract {
          word-break: break-all;
          color: #4d4d4d;
          text-indent: 24px;
        }
      }

      & img {
        width: 180px;
        height: 180px;
        border-radius: 4px;
        font-size: 14px;
        margin-left: 50px;
        .right;
      }

      .more {
        color: @c-oragin;
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 250px;
        cursor: pointer;
      }
    }
  }

</style>
