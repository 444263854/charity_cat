<template>
  <div class="register_bg">
    <div class="goHome">
      <router-link :to="{name:'home'}">逛逛社区<i class="iconfont icon-jiantou1-copy1"></i></router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {};

</script>

<style lang="less">
  @import url("../../assets/styles/mix.less");

  .register_bg {
    background: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .goHome {
      color: @text-color;
      font-size: 20px;
      position: absolute;
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);

      &>a:hover {
        color: @c-oragin;
      }
    }

    .content {
      margin: 15vh auto 0;
      width: 400px;
      text-align: center;

      h1 {
        font-size: 56px;
      }

      h2 {
        font-size: 30px;
        color: @c-oragin;
      }

      .wrap {
        margin-top: 25px;
        font-size: 14px;
        color: @text-color;
        vertical-align: middle;

        button {
          font-size: 30px;
          width: 400px;
          height: 60px;
        }

        a {
          text-decoration: underline;
          color: @c-oragin;
        }
      }

      .iptWrap {
        text-align: left;
        border-bottom: 2px solid #ccc;
        margin-top: 40px;

        button {
          vertical-align: middle;
        }

        label {
          text-align: right;
          font-size: 22px;
          width: 95px;
          display: inline-block;
          vertical-align: middle;
        }

        input {
          outline: none;
          border: none;
          background: #fff;
          box-shadow: none;
          font-size: 14px;
          width: 200px;
          vertical-align: middle;
        }
      }
    }
  }

</style>
