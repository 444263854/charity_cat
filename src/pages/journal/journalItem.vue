<template>
  <div class="artical_item">
    <div class="ItemTitle">
      <i class="icon"></i>
      <span class="caption">标题：{{title}}</span>
      <div class="date_time">
        <span class="date">{{time[0]}}</span>
        <span class="time">{{time[1]}}</span>
      </div>
    </div>
    <div class="detail ql-snow">
      <div class="imgWrap">
        <img :src="imgURL">
      </div>
      <div class="overview ql-editor ql-blank" v-html="abstract"></div>
      <p class="more">
        <router-link :to="{name:path, params : { id : articleID}}">
          <span>查看全文></span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datetime: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      required: true
    },
    articleID: {
      type: String,
      required: true
    },
    abstract: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      time: this.$format(new Date(this.datetime), "yyyy-mm-dd hh:ff").split(" ")
    };
  }
};
</script>
<style scoped lang='less'>
@import url("../../assets/styles/mix.less");

.artical_item {
  width: 1000px;
  height: 230px;
  margin: 30px auto 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-right: none;
  border-left: none;

  .ItemTitle {
    position: relative;
    padding: 5px 20px 5px 0;
    height: 30px;
    box-sizing: border-box;
    line-height: 20px;

    .icon {
      position: absolute;
      left: 5px;
      display: block;
      width: 20px;
      height: 20px;
      background: url("../../assets/images/footer_small.png") no-repeat;
    }

    .caption {
      font-size: 20px;
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
    font-size: 14px;
    position: relative;

    .overview {
      position: relative;
      .left;
      width: 720px;
      height: 11em;
      /*注意不嫩出现半截文字,所以高度是行高的整数倍数*/
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3em;
        width: 100%;
        background: linear-gradient(to bottom, transparent, white);
      }
    }

    .imgWrap {
      width: 180px;
      height: 180px;
      border-radius: 4px;
      font-size: 14px;
      margin-left: 50px;
      overflow: hidden;
      .right;
    }

    .more span {
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
